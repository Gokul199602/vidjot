module.exports = {
    ensureAuthenticated: function(req,res,next)
    {
        if(req.isAuthenticated())
        {
            return next();
        }
        req.flash('error_msg','Not Autherized');
        res.redirect('/users/login');
    }
}