<template>
  <component :is="getElByName(name)" :size="size" :color="color" :gradient-position="gradientPosition"
    :linear-gradient="linearGradient" />
</template>

<script>
import { defaultSize } from "./config"

import * as globalicon from "./global/elements.js"
import * as ilicon from "./inline-btn/elements.js"
import * as logo from "./logo/elements.js"
import * as mobile from "./mobile/elements.js"

export default {
  props: {
    name: { type: String, default: '' },
    size: { type: [String, Number], default: defaultSize },
    color: { type: [String, Array], default: '#000' },
    gradientPosition: { type: Array, default: () => ([]) },
    linearGradient: { type: Array, default: () => ([]) },
  },
  methods: {
    getElByName(name) {
      switch (name) {
        // ------------- global -------------
        case "add-item": return globalicon.addItem
        case "add-outer-sampling": return globalicon.addOuterSampling
        case "add": return globalicon.add
        case "back": return globalicon.back
        case "calc-auto": return globalicon.calcAuto
        case "calc-balance": return globalicon.calcBalance
        case "cancel": return globalicon.cancel
        case "certificate-confirm": return globalicon.certificateConfirm
        case "clear": return globalicon.clear
        case "configure": return globalicon.configure
        case "confirm": return globalicon.confirm
        case "data-collect": return globalicon.dataCollect
        case "data-synchronous": return globalicon.dataSynchronous
        case "defect-conversion": return globalicon.defectConversion
        case "delete-item": return globalicon.deleteItem
        case "delete": return globalicon.delete
        case "detail-inventory": return globalicon.detailInventory
        case "detail-template": return globalicon.detailTemplate
        case "disable": return globalicon.disable
        case "distribute-auto": return globalicon.distributeAuto
        case "distribute-cancel": return globalicon.distributeCancel
        case "distribute-confirm": return globalicon.distributeConfirm
        case "distribute": return globalicon.distribute
        case "enable": return globalicon.enable
        case "escalation": return globalicon.escalation
        case "examine": return globalicon.examine
        case "execute": return globalicon.execute
        case "export": return globalicon.export0
        case "fault": return globalicon.fault
        case "fillin-data": return globalicon.fillinData
        case "generate-barcode": return globalicon.generateBarcode
        case "grant": return globalicon.grant
        case "import-detail": return globalicon.importDetail
        case "mixin": return globalicon.mixin
        case "modify": return globalicon.modify
        case "not-handled": return globalicon.nothandled
        case "related-defects": return globalicon.relatedDefects
        case "reset": return globalicon.reset
        case "return": return globalicon.return0
        case "revoke": return globalicon.revoke
        case "run": return globalicon.run
        case "running-record": return globalicon.runningRecord
        case "sampling-cancel": return globalicon.samplingCancel
        case "sampling-composite-cancel": return globalicon.samplingCompositeCancel
        case "sampling-composite-confirm": return globalicon.samplingCompositeConfirm
        case "sampling-receive-confirm": return globalicon.samplingReceiveConfirm
        case "sampling-receive": return globalicon.samplingReceive
        case "sampling-send": return globalicon.samplingSend
        case "sampling-spot": return globalicon.samplingSpot
        case "save-case": return globalicon.saveCase
        case "save": return globalicon.save
        case "search": return globalicon.search
        case "send-cancel": return globalicon.sendCancel
        case "send": return globalicon.send
        case "storage-in-confirm": return globalicon.storageInConfirm
        case "storage-in-revoke": return globalicon.storageInRevoke
        case "storage-out-confirm": return globalicon.storageOutConfirm
        case "storage-out-revoke": return globalicon.storageOutRevoke
        case "submit-repository": return globalicon.submitRepository
        case "submit": return globalicon.submit
        case "task-distribution": return globalicon.taskDistribution
        case "task-feedback": return globalicon.taskFeedback
        case "template": return globalicon.template
        case "view-detail": return globalicon.viewDetail
        case "weigh-cancel": return globalicon.weighCancel
        case "weigh-complete": return globalicon.weighComplete
        case "weigh-start": return globalicon.weighStart
        case "weight-confirm": return globalicon.weightConfirm
        case "withdraw": return globalicon.withdraw
        // ------------- inline-btn -------------
        case "adjust": return ilicon.adjust
        case "check-item": return ilicon.checkItem
        case "configure2": return ilicon.configure2
        case "copy": return ilicon.copy
        case "detail": return ilicon.detail
        case "adjust": return ilicon.adjust
        case "disable2": return ilicon.disable2
        case "edit": return ilicon.edit
        case "export2": return ilicon.export2
        case "filling": return ilicon.filling
        case "input": return ilicon.input
        case "mate": return ilicon.mate
        case "play": return ilicon.play
        case "print": return ilicon.print
        case "process": return ilicon.process
        case "rule": return ilicon.rule
        case "stop": return ilicon.stop
        case "upload": return ilicon.upload
        case "view": return ilicon.view
        case "view2": return ilicon.view2
        // ------------- logo -------------
        case "vue-logo": return logo.vue
        case "vue": return logo.vue2
        // ------------- mobile -------------
        case "address-m": return mobile.address
        case "arrow-right-m": return mobile.arrowRight
        case "back-m": return mobile.back
        case "calendar-m": return mobile.calendar
        case "craft-table-m": return mobile.craftTable
        case "department-m": return mobile.department
        case "done-m": return mobile.done
        case "email-m": return mobile.email
        case "hide-m": return mobile.hide
        case "home-m": return mobile.home
        case "logistics-complete-m": return mobile.logisticsComplete
        case "logistics-data-m": return mobile.logisticsData
        case "logistics-reservation-m": return mobile.logisticsReservation
        case "logistics-vehicle-m": return mobile.logisticsVehicle
        case "message-m": return mobile.message
        case "mine-m": return mobile.mine
        case "mystate-abnormal-m": return mobile.myStateAbnormal
        case "mystate-normal-m": return mobile.myStateNormal
        case "myrequest-draft-m": return mobile.myRequestDraft
        case "myrequest-end-m": return mobile.myRequestEnd
        case "myrequest-running-m": return mobile.myRequestRunning
        case "pass-perusal-m": return mobile.passPerusal
        case "phone-number-m": return mobile.phoneNumber
        case "read-already-m": return mobile.readAlready
        case "read-wait-m": return mobile.readWait
        case "request-m": return mobile.request
        case "role-m": return mobile.role
        case "search-m": return mobile.search
        case "station-m": return mobile.station
        case "todo-already-m": return mobile.todoAlready
        case "todo-wait-m": return mobile.todoWait
        case "todo-m": return mobile.todo
        case "triangle-above-m": return mobile.triangleAbove
        case "triangle-below-m": return mobile.triangleBelow
        case "triangle-updown-m": return mobile.triangleUpdown
        // --------------------------------------
        default: return
      }
    }
  }
}
</script>
