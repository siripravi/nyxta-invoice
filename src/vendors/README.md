# YiiBooster

[![Travis CI](https://travis-ci.org/clevertech/YiiBooster.svg?branch=master)](https://travis-ci.org/clevertech/YiiBooster)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/clevertech/YiiBooster/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/clevertech/YiiBooster/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/clevertech/YiiBooster/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/clevertech/YiiBooster/?branch=master)

[![Latest Stable Version](https://poser.pugx.org/clevertech/yii-booster/v/stable.png)](https://github.com/clevertech/YiiBooster/tree/3.0.1) [![Total Downloads](https://poser.pugx.org/clevertech/yii-booster/downloads.png)](https://packagist.org/packages/clevertech/yii-booster) [![Latest Unstable Version](https://poser.pugx.org/clevertech/yii-booster/v/unstable.png)](https://github.com/clevertech/YiiBooster/tree/master) [![License](https://poser.pugx.org/clevertech/yii-booster/license.png)](https://github.com/clevertech/YiiBooster/blob/master/LICENSE)

---

**This is the master branch, containing work in progress on the next release.
Do not think that it's a production ready version which you can safely clone into your project.
If you want the latest point release, check out the `4.0.1` release**

---

**4.x.x is based on twitter Bootstrap 3.1.1 or later.
If you want to use Bootstrap 2.3.2, please check out the latest `3.x.x` release**

---

YiiBooster is a widget toolkit for [Yii web framework](http://www.yiiframework.com).
Its main purpose is to ease building UI in Yii-based web applications utilizing the beauty of [Twitter Bootstrap][twitter-bootstrap]
and several other great UI plugins developed over time by the community.

Twitter Bootstrap wrapping is based over the excellent job of [Christoffer Niska](https://twitter.com/Crisu83) called [Yii-Bootstrap](http://www.cniska.net/yii-bootstrap/).
We at [Clevertech](http://clevertech.biz) included his library into our own Yii project startup library, [YiiBoilerplate](http://github.com/clevertech/yiiboilerplate),
and started improving it in order to satisfy some of our customers' project requirements.
YiiBooster is an end result of this effort.

## Widgets at a glance

Overall, the following is included in YiiBooster:

- All of most current [Twitter Bootstrap][twitter-bootstrap] goodness we were able to integrate with.
- [FontAwesome icons pack](http://fortawesome.github.io/Font-Awesome/) for Twitter Bootstrap.
- [jQuery File Upload](https://github.com/blueimp/jQuery-File-Upload) widget for fancy file uploads.
- [jQueryUI/Bootstrap](http://addyosmani.github.io/jquery-ui-bootstrap/) integration.
- [Select2](http://ivaynberg.github.io/select2/) widget for fancy selectors.
- [X-Editable](http://vitalets.github.io/x-editable/) plugin for in-place editing of table cells values.
- Absolutely crazy custom grid views called [TbExtendedGridView](http://yii-booster.clevertech.biz/extended-grid.html) and [TbJsonGridView](http://yii-booster.clevertech.biz/json-grid.html), packed with features to the brim.
- _Four_ different WYSIWYG editors for you to choose:

  - [wysihtml5](https://github.com/xing/wysihtml5) [with Bootstrap integration](https://github.com/jhollingworth/bootstrap-wysihtml5),
  - [jQuery Markdown](https://github.com/arhpreston/jquery-markdown),
  - [CKEditor](http://ckeditor.com/) and
  - [Redactor](http://imperavi.com/redactor/).

  And don't be afraid to use Redactor, because Yii community bought an ORM license for it.

- And several other little and not-so-little widgets for you to use.

## Quick Start

If you want, you can clone the [github repo](https://github.com/clevertech/YiiBooster) and get the full codebase
to build the distributive or documentation or just to hack something.

If you just want to _use_ YiiBooster, you need to [download the latest distributive archive](https://sourceforge.net/projects/yiibooster/files/latest/download?source=files).
After that, consult the [YiiBooster documentation website][booster-docs] or the `INSTALL.md` file included in the package.

## Widgets end-user documentation

Check out [YiiBooster documentation website][booster-docs].

## Contributing

Long story short: make pull requests from separate branches dedicated for individual features to `master`.
Please see the [wiki page about how to contribute to YiiBooster](https://github.com/clevertech/YiiBooster/wiki/How-to-contribute-to-this-repository) for details.

## Bug tracker

If you find any bugs, please create an issue at [issue tracker for project Github repository][booster-issues].

## License

This work as a whole is licensed under a BSD license. Full text is included in the `LICENSE` file in the root of codebase.

> Well-built beautifully designed web applications.
>
> [www.clevertech.biz](http://www.clevertech.biz)

[twitter-bootstrap]: http://twitter.github.com/bootstrap/
[booster-docs]: http://yii-booster.clevertech.biz/
[booster-issues]: https://github.com/clevertech/YiiBooster/issues
