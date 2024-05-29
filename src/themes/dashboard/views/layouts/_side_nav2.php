<style>
               
.main-menu:hover,nav.main-menu.expanded {
width:250px;
overflow:visible;
}

.main-menu {
background:#333; /*#fbfbfb;*/
border-right:1px solid #e5e5e5;
position:absolute;
top:70px;
bottom:0;
height:100%;
left:0;
width:60px;
overflow:hidden;
-webkit-transition:width .05s linear;
transition:width .05s linear;
-webkit-transform:translateZ(0) scale(1,1);
z-index:1000;
}

.main-menu>ul {
margin:7px 0;
}
 .main-menu li a i{font-size:24px;position: relative;
            display: table-cell;
            width: 60px;
            height: 36px;
            /*text-align: center;*/
            vertical-align: middle;
            border:none;
            }
.main-menu li {
position:relative;
display:block;
width:250px;
}

.main-menu li>a {
position:relative;
/*display:table;*/
border-collapse:collapse;
border-spacing:0;
color:#999;
 font-family: arial;
font-size: 14px;
text-decoration:none;
-webkit-transform:translateZ(0) scale(1,1);
-webkit-transition:all .1s linear;
transition:all .1s linear;
  
}

.main-menu .nav-icon {
position:relative;
display:table-cell;
width:60px;
height:36px;
text-align:center;
vertical-align:middle;
font-size:18px;
}

.main-menu .nav-text {
position:relative;
display:table-cell;
vertical-align:middle;
width:190px;
  font-family: 'Titillium Web', sans-serif;
  padding:0;
}

.main-menu>ul.logout {
position:absolute;
left:0;
bottom:0;
}


.no-touch .scrollable.hover {
overflow-y:hidden;
}

.no-touch .scrollable.hover:hover {
overflow-y:auto;
overflow:visible;
}

a:hover,a:focus {
text-decoration:none;
}

nav {
-webkit-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
-o-user-select:none;
user-select:none;
}

nav ul,nav li {
outline:0;
margin:0;
padding:0;
}
.main-menu li:hover>a,nav.main-menu li.active>a,.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus,.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus,.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,.dashboard-page nav.dashboard-menu ul li.active a {
color:#fff;
background-color:#5fa2db;
}
.area {
float: left;
background: #e2e2e2;
width: 100%;
height: 100%;
}
</style>

<div class="area"></div>

    
 <?php $this->widget('bootstrap.widgets.TbMenu',array(
             'type'=>'pills',
            'stacked' => true,
            'encodeLabel' => false,
            'htmlOptions'=>array('class'=>'main-menu'),
            'items'=>array(
                    array('label'=>'<i class="pe-7s-home"></i><span class="nav-text">Home</span>', 'url'=>array('/site/index')), 
                    array('label'=>'<i class="pe-7s-note2"></i><span class="nav-text">Quotes</span>', 'url'=>array('/quotation/search')), 
                    array('label'=>'<i class="pe-7s-news-paper"></i><span class="nav-text">Invoices</span>', 'url'=>array('/invoice/search')),
                    array('label'=>'<i class="pe-7s-safe"></i><span class="nav-text">Payments</span>', 'url'=>array('/payments/admin')),
                  array('label'=>'<i class="pe-7s-users"></i><span class="nav-text">Customers</span>', 'url'=>array('/customer/admin')),
                  array('label'=>'<i class="pe-7s-drop"></i><span class="nav-text">Venues</span>', 'url'=>array('/venue/admin')),
           ),
        ));
        ?> 
      <!--      <ul>
                <li>
                    <a href="#">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                            Dashboard
                        </span>
                    </a>
                  
                </li>
                <li class="has-subnav">
                    <a href="#">
                        <i class="fa fa-laptop fa-2x"></i>
                        <span class="nav-text">
                            UI Components
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-list fa-2x"></i>
                        <span class="nav-text">
                            Forms
                        </span>
                    </a>
                    
                </li>
            </ul>  -->
