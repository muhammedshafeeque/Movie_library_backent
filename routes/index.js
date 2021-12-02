var express = require('express');
var router = express.Router();
var movie=[
  {
    name:"dhoom",
    rating:9.5,
    release:'25-jun-2008'

  },
  {
    name:"dhoom2",
    rating:9.5,
    release:'28-jun-2012'

  },
  {
    name:"dhoom3",
    rating:9.5,
    release:'15-jun-2018'

  },
  {
    name:"dhoom",
    rating:9.5,
    release:'25-jun-2008'

  },
  {
    name:"dhoom2",
    rating:9.5,
    release:'28-jun-2012'

  },
  {
    name:"dhoom3",
    rating:9.5,
    release:'15-jun-2018'

  },
  {
    name:"dhoom",
    rating:9.5,
    release:'25-jun-2008'

  },
  {
    name:"dhoom2",
    rating:9.5,
    release:'28-jun-2012'

  },
  {
    name:"dhoom3",
    rating:9.5,
    release:'15-jun-2018'

  },
  {
    name:"dhoom",
    rating:9.5,
    release:'25-jun-2008'

  },
  {
    name:"dhoom2",
    rating:9.5,
    release:'28-jun-2012'

  },
  {
    name:"dhoom3",
    rating:9.5,
    release:'15-jun-2018'

  },{
    name:"dhoom",
    rating:9.5,
    release:'25-jun-2008'

  },
  {
    name:"dhoom2",
    rating:9.5,
    release:'28-jun-2012'

  },
  {
    name:"dhoom3",
    rating:9.5,
    release:'15-jun-2018'

  },
  {
    name:"dhoom",
    rating:9.5,
    release:'25-jun-2008'

  },
  {
    name:"dhoom2",
    rating:9.5,
    release:'28-jun-2012'

  },
  {
    name:"dhoom3",
    rating:9.5,
    release:'15-jun-2018'

  },
  {
    name:"dhoom",
    rating:9.5,
    release:'25-jun-2008'

  },
  {
    name:"dhoom2",
    rating:9.5,
    release:'28-jun-2012'

  },
  {
    name:"dhoom3",
    rating:9.5,
    release:'15-jun-2018'

  },


]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/movies',(req,res)=>{
  res.json(movie)
})
router.post('/chosse_movie',(req,res)=>{
  console.log(req.body)

})

module.exports = router;
