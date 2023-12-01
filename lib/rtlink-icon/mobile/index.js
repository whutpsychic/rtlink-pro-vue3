// **************************************************************************
import address from "./address.vue"
import arrowRight from "./arrow-right.vue"
import back from "./back.vue"
import calendar from "./calendar.vue"
import craftTable from "./craft-table.vue"
import department from "./department.vue"
import done from "./done.vue"
import email from "./email.vue"
import hide from "./hide.vue"
import home from "./home.vue"
import logisticsComplete from "./logistics-complete.vue"
import logisticsData from "./logistics-data.vue"
import logisticsReservation from "./logistics-reservation.vue"
import logisticsVehicle from "./logistics-vehicle.vue"
import message from "./message.vue"
import mine from "./mine.vue"
import myStateAbnormal from "./my-state-abnormal.vue"
import myStateNormal from "./my-state-normal.vue"

import myRequestDraft from "./myrequest-draft.vue"
import myRequestEnd from "./myrequest-end.vue"
import myRequestRunning from "./myrequest-running.vue"
import passPerusal from "./pass-perusal.vue"
import phoneNumber from "./phone-number.vue"
import readAlready from "./read-already.vue"
import readWait from "./read-wait.vue"
import request from "./request.vue"
import role from "./role.vue"
import search from "./search.vue"
import station from "./station.vue"
import todoAlready from "./todo-already.vue"
import todoWait from "./todo-wait.vue"
import todo from "./todo.vue"
import triangleAbove from "./triangle-above.vue"
import triangleBelow from "./triangle-below.vue"
import triangleUpdown from "./triangle-updown.vue"

import view from "./view.vue"
// **************************************************************************

const RtIcons = {
  // 注册所有图标
  install(app) {

    app.component('rtmicon-address', address)
    app.component('rtmicon-arrow-right', arrowRight)
    app.component('rtmicon-back', back)
    app.component('rtmicon-calendar', calendar)
    app.component('rtmicon-craft-table', craftTable)
    app.component('rtmicon-department', department)
    app.component('rtmicon-done', done)
    app.component('rtmicon-email', email)
    app.component('rtmicon-hide', hide)
    app.component('rtmicon-home', home)
    app.component('rtmicon-logistics-complete', logisticsComplete)
    app.component('rtmicon-logistics-data', logisticsData)
    app.component('rtmicon-logistics-reservation', logisticsReservation)
    app.component('rtmicon-logistics-vehicle', logisticsVehicle)
    app.component('rtmicon-message', message)
    app.component('rtmicon-mine', mine)
    app.component('rtmicon-mystate-abnormal', myStateAbnormal)
    app.component('rtmicon-mystate-normal', myStateNormal)
    app.component('rtmicon-myrequest-draft', myRequestDraft)
    app.component('rtmicon-myrequest-end', myRequestEnd)
    app.component('rtmicon-myrequest-running', myRequestRunning)
    app.component('rtmicon-pass-perusal', passPerusal)
    app.component('rtmicon-phone-number', phoneNumber)
    app.component('rtmicon-read-already', readAlready)
    app.component('rtmicon-read-wait', readWait)
    app.component('rtmicon-request', request)
    app.component('rtmicon-role', role)
    app.component('rtmicon-search', search)
    app.component('rtmicon-station', station)
    app.component('rtmicon-todo-already', todoAlready)
    app.component('rtmicon-todo-wait', todoWait)
    app.component('rtmicon-todo', todo)
    app.component('rtmicon-triangle-above', triangleAbove)
    app.component('rtmicon-triangle-below', triangleBelow)
    app.component('rtmicon-triangle-updown', triangleUpdown)
    app.component('rtmicon-view', view)

  }
}

export default RtIcons