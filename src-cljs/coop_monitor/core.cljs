(ns coop-monitor.core
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [reagent.session :as session]
            [reagent-forms.core :refer [bind-fields]]
            [ajax.core :refer [GET POST]])
  (:require-macros [secretary.core :refer [defroute]]))


;; Event schema

(defonce app-state (atom {:events []}))

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
   [:ul
    (for [event (->> @app-state :events (take 5))]
      [:li (str (:name event) ": " (:info event))])]])

(defn home-page []
  [:div
   (events-monitor)])

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


