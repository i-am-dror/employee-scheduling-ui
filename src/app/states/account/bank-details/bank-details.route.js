'use strict';

function bankDetailsRoute($stateProvider) {
    return $stateProvider
        .state('account.bank-details', {
            url: '/bank-details',
            templateUrl: 'app/states/account/bank-details/bank-details.html'
        });
}

export default bankDetailsRoute;
