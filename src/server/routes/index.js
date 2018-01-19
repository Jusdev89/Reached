const router = require('express').Router()
const authentication = require('./authentication');

// router.use(setDefaultReponseLocals);

router.get('/', (request, response) => {
  if(request.session.user) {
    const id = request.session.user.id;
    response.redirect(`/users/${id}`);
  } else {
    response.render('index', {warning: request.flash('error')});
  }
});


router.use('/', authentication);
router.use('/campaigns', campaigns);
// router.use(isLoggedIn);

module.exports = router;
