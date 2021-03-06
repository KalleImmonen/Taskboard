// api/policies/hasUserAdmin.js

/**
 * Policy to check if user has admin rights to users or not. Basically this check
 * is very simply if user is not admin he/she don't have right to this,,,
 *
 * @param   {Request}   request     Request object
 * @param   {Response}  response    Response object
 * @param   {Function}  next        Callback function to call if all is ok
 */
module.exports = function hasUserAdmin(request, response, next) {
    sails.log.verbose(" POLICY - api/policies/hasUserAdmin.js");

    AuthService.isAdministrator(request.user, function(error, hasRight) {
        if (error) { // Error occurred
            response.send(error, error.status ? error.status : 500);
        } else if (!hasRight) {
            response.send("Insufficient rights you're not administrator.", 403);
        } else { // Otherwise all is ok
            sails.log.verbose("          OK");

            next();
        }
    });
};
