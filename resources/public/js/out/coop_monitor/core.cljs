(ns coop-monitor.core
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [reagent.session :as session]
            [reagent-forms.core :refer [bind-fields]]
            [ajax.core :refer [GET POST]])
  (:require-macros [secretary.core :refer [defroute]]))


;; Event schema

(defonce app-state (atom {:events [] :egg-data []}))

(swap! app-state assoc :events [{:date "Today" :time "4:30 AM" :event "Door opened" :info "2 retries"}
                                {:date "Today" :time "8:30 PM" :event "Door closed" :info ""}
                                {:date "Yesterday" :time "8:24 PM" :event "Door closed" :info ""}
                                {:date "Yesterday" :time "4:36 AM" :event "Door opened" :info "1 retry"}])

(swap! app-state assoc :egg-data [{:date "Today" :chicken "Black chicken" :eggs 1}
                                  {:date "Today" :chicken "Gold chicken" :eggs 1}
                                  {:date "Yesterday" :chicken "Java chicken" :eggs 1}
                                  {:date "Yesterday" :chicken "New chicken" :eggs 2}
                                  {:date "04/30/2015" :chicken "Black chicken" :eggs 1}
                                  {:date "04/30/2015" :chicken "Gold chicken" :eggs 1}
                                  {:date "04/30/2015" :chicken "Java chicken" :eggs 1}])

(defn navbar []
      [:div.navbar.navbar-inverse.navbar-fixed-top
       [:div.container
        [:div.navbar-header
         [:a.navbar-brand {:href "#/"} "coop-monitor"]]
        [:div.navbar-collapse.collapse
         [:ul.nav.navbar-nav
          [:li {:class (when (= :home (session/get :page)) "active")}
           [:a {:on-click #(secretary/dispatch! "#/")} "Home"]]
          [:li {:class (when (= :about (session/get :page)) "active")}
           [:a {:on-click #(secretary/dispatch! "#/about")} "About"]]]]]])

(defn about-page []
  [:div "This is the harrowing tale of the coop monitor.
        It came about in the fall of 2014, when I moved to a new house.
        It is epic in every sense of the word."])

(defn events-monitor []
  [:div.events-monitor
   [:h3 "Events"]
   [:table.table
    [:tr [:th "Date"] [:th "Time"] [:th "Event"] [:th "Info"]]
    (for [{:keys [date time event info]} (->> @app-state :events (take 5))]
      [:tr [:td date] [:td time] [:td event] [:td info]])]])

(defn egg-summary [chickens egg-data]
  (let [chicken-egg-data (group-by :chicken egg-data)
        chicken-to-counts (reduce
                            (fn [ctc [c eds]]
                              (assoc ctc c (apply + (map :eggs eds))))
                            {}
                            chicken-egg-data)]
    (println "XXX" chicken-to-counts)
    [:tr [:th "AVG"]
     (for [c chickens]
       [:td (chicken-to-counts c)])]))

(defn egg-monitor []
  (let [egg-data (:egg-data @app-state)
        chickens (->> egg-data (map :chicken) distinct sort)]
    [:div.egg-monitor
     [:h3 "Eggs"]
     [:table.table
      [:tr [:th "Date"] (for [c chickens] [:th c])]
      (for [[date date-data] (group-by :date egg-data)]
        (let [date-data (group-by :chicken date-data)]
          [:tr [:td date]
           (for [chicken chickens]
             (let [egg-count (-> date-data (get chicken) first :eggs (or 0))]
               [:td egg-count]))]))
      [egg-summary chickens egg-data]
      ]
     ]))

(defn home-page []
  [:div
   [events-monitor]
   [egg-monitor]
   ;[egg-summary [] []]
   ])

(def pages
  {:home #'home-page
   :about #'about-page})

(defn page []
  [(pages (session/get :page))])

(defroute "/" [] (session/put! :page :home))
(defroute "/about" [] (session/put! :page :about))

(defn mount-components []
  (reagent/render-component [navbar] (.getElementById js/document "navbar"))
  (reagent/render-component [page] (.getElementById js/document "app")))

(defn init! []
  (secretary/set-config! :prefix "#")
  (session/put! :page :home)
  (mount-components))


