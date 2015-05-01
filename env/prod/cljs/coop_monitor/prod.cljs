(ns coop-monitor.app
  (:require [coop-monitor.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
