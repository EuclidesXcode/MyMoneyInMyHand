const express = require('express')

module.exports = function(app) {

    //Base URL
    const router = express.Router()
    app.use('/api', router)
    
    // Rotas do ciclo de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
    
}