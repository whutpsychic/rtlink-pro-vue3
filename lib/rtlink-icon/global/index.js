// **************************************************************************
import addItem from "./add-item.vue"
import addOuterSampling from "./add-outer-sampling.vue"
import add from "./add.vue"

import back from "./back.vue"

import calcAuto from "./calc-auto.vue"
import calcBalance from "./calc-balance.vue"
import cancel from "./cancel.vue"
import certificateConfirm from "./certificate-confirm.vue"
import clear from "./clear.vue"
import configure from "./configure.vue"
import confirm from "./confirm.vue"

import dataCollect from "./data-collect.vue"
import dataSynchronous from "./data-synchronous.vue"
import defectConversion from "./defect-conversion.vue"
import deleteItem from "./delete-item.vue"
import delete0 from "./delete.vue"
import detailInventory from "./detail-inventory.vue"
import detailTemplate from "./detail-template.vue"
import disable from "./disable.vue"
import distributeAuto from "./distribute-auto.vue"
import distributeCancel from "./distribute-cancel.vue"
import distributeConfirm from "./distribute-confirm.vue"
import distribute from "./distribute.vue"

import enable from "./enable.vue"
import escalation from "./escalation.vue"
import examine from "./examine.vue"
import execute from "./execute.vue"
import export0 from "./export.vue"

import fault from "./fault.vue"
import fillinData from "./fillin-data.vue"

import generateBarcode from "./generate-barcode.vue"
import grant from "./grant.vue"

import importDetail from "./import-detail.vue"
import import0 from "./import.vue"

import mixin from "./mixin.vue"
import modify from "./modify.vue"

import nothandled from "./not-handled.vue"

import relatedDefects from "./related-defects.vue"

import reset from "./reset.vue"
import return0 from "./return.vue"
import revoke from "./revoke.vue"
import run from "./run.vue"
import runningRecord from "./running-record.vue"

import samplingCancel from "./sampling-cancel.vue"
import samplingCompositeCancel from "./sampling-composite-cancel.vue"
import samplingCompositeConfirm from "./sampling-composite-confirm.vue"
import samplingReceiveConfirm from "./sampling-receive-confirm.vue"
import samplingReceive from "./sampling-receive.vue"
import samplingSend from "./sampling-send.vue"
import samplingSpot from "./sampling-spot.vue"
import saveCase from "./save-case.vue"
import save from "./save.vue"
import search from "./search.vue"
import sendCancel from "./send-cancel.vue"
import send from "./send.vue"
import storageInConfirm from "./storageIn-confirm.vue"
import storageInRevoke from "./storageIn-revoke.vue"
import storageOutConfirm from "./storageOut-confirm.vue"
import storageOutRevoke from "./storageOut-revoke.vue"
import submitRepository from "./submit-repository.vue"
import submit from "./submit.vue"

import taskDistribution from "./task-distribution.vue"
import taskFeedback from "./task-feedback.vue"
import template from "./template.vue"

import viewDetail from "./view-detail.vue"

import weighCancel from "./weigh-cancel.vue"
import weighComplete from "./weigh-complete.vue"
import weighStart from "./weigh-start.vue"
import weightConfirm from "./weight-confirm.vue"
import withdraw from "./withdraw.vue"
// **************************************************************************


const RtIcons = {
  // 注册所有图标
  install(app) {
  
    app.component('rticon-add-item', addItem)
    app.component('rticon-add-outer-sampling', addOuterSampling)
    app.component('rticon-add', add)
    app.component('rticon-back', back)
    app.component('rticon-calc-auto', calcAuto)
    app.component('rticon-calc-balance', calcBalance)
    app.component('rticon-cancel', cancel)
    app.component('rticon-certificate-confirm', certificateConfirm)
    app.component('rticon-clear', clear)
    app.component('rticon-configure', configure)
    app.component('rticon-confirm', confirm)
    app.component('rticon-data-collect', dataCollect)
    app.component('rticon-data-synchronous', dataSynchronous)
    app.component('rticon-defect-conversion', defectConversion)
    app.component('rticon-delete-item', deleteItem)
    app.component('rticon-delete', delete0)
    app.component('rticon-detail-inventory', detailInventory)
    app.component('rticon-detail-template', detailTemplate)
    app.component('rticon-disable', disable)
    app.component('rticon-distribute-auto', distributeAuto)
    app.component('rticon-distribute-cancel', distributeCancel)
    app.component('rticon-distribute-confirm', distributeConfirm)
    app.component('rticon-distribute', distribute)
    app.component('rticon-enable', enable)
    app.component('rticon-escalation', escalation)
    app.component('rticon-examine', examine)
    app.component('rticon-execute', execute)
    app.component('rticon-export', export0)
    app.component('rticon-fault', fault)
    app.component('rticon-fillin-data', fillinData)
    app.component('rticon-generate-barcode', generateBarcode)
    app.component('rticon-grant', grant)
    app.component('rticon-import-detail', importDetail)
    app.component('rticon-import', import0)
    app.component('rticon-mixin', mixin)
    app.component('rticon-modify', modify)
    app.component('rticon-not-handled', nothandled)
    app.component('rticon-related-defects', relatedDefects)
    app.component('rticon-reset', reset)
    app.component('rticon-return', return0)
    app.component('rticon-revoke', revoke)
    app.component('rticon-run', run)
    app.component('rticon-running-record', runningRecord)
    app.component('rticon-sampling-cancel', samplingCancel)
    app.component('rticon-sampling-composite-cancel', samplingCompositeCancel)
    app.component('rticon-sampling-composite-confirm', samplingCompositeConfirm)
    app.component('rticon-sampling-receive-confirm', samplingReceiveConfirm)
    app.component('rticon-sampling-receive', samplingReceive)
    app.component('rticon-sampling-send', samplingSend)
    app.component('rticon-sampling-spot', samplingSpot)
    app.component('rticon-save-case', saveCase)
    app.component('rticon-save', save)
    app.component('rticon-search', search)
    app.component('rticon-send-cancel', sendCancel)
    app.component('rticon-send', send)
    app.component('rticon-storageIn-confirm', storageInConfirm)
    app.component('rticon-storageIn-revoke', storageInRevoke)
    app.component('rticon-storageOut-confirm', storageOutConfirm)
    app.component('rticon-storageOut-revoke', storageOutRevoke)
    app.component('rticon-submit-repository', submitRepository)
    app.component('rticon-submit', submit)
    app.component('rticon-task-distribution', taskDistribution)
    app.component('rticon-task-feedback', taskFeedback)
    app.component('rticon-template', template)
    app.component('rticon-view-detail', viewDetail)
    app.component('rticon-weigh-cancel', weighCancel)
    app.component('rticon-weigh-complete', weighComplete)
    app.component('rticon-weigh-start', weighStart)
    app.component('rticon-weight-confirm', weightConfirm)
    app.component('rticon-withdraw', withdraw)

  }
}

export default RtIcons