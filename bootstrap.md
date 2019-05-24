# Bootstrap framework

* You might don't need to include jquery to your bundle, check this [Bootstrap Vanilla Javascript](https://github.com/thednp/bootstrap.native). Why?
  * For Angular it's better to avoid using libraries that make direct manipulation of the DOM (like jQuery) and let Angular handle that.
  * Overhead. jQuery will add 30KB to your page size.
  * jQuery can be tricky to configure with bundlers like Webpack.
  * When you put Angular in charge of the DOM you don’t want to have jQuery in there messing up the place.
* For Angular applications, use [ng-bootstrap](https://github.com/ng-bootstrap/ng-bootstrap) or [ngx-bootstrap](https://github.com/valor-software/ngx-bootstrap).
* Should I add bootstrap.js or bootstrap.min.js to my project? No, the goal of ng-bootstrap is to completely replace JavaScript implementation for components. Nor should you include other dependencies like jQuery or popper.js. It is not necessary and might interfere with ng-bootstrap code.
  * check this [article](https://www.techiediaries.com/angular-bootstrap/) and [this](https://blog.fullstacktraining.com/add-bootstrap-to-an-angular-application/)
  * npm install --save @ng-bootstrap/ng-bootstrap
  * npm install ngx-bootstrap --save
  * ngx-bootstrap provides each bootstrap component in each own module so you only import the components you need. In this way your app will be smaller since it bundles only the components you are actually using.
  * You should add bootstap css via npm install --save bootstrap and include the css file in angular.json
  * [ngx-bootstrap Documentation](https://valor-software.com/ngx-bootstrap/#/documentation)
  * [ng-bootstrap Documentation](https://ng-bootstrap.github.io)
* [Bootstrap Themes](https://bootswatch.com/)
