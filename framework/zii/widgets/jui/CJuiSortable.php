<?php

/**
 * CJuiSortable class file.
 *
 * @author Sebastian Thierer <sebathi@gmail.com>
 * @link https://www.yiiframework.com/
 * @copyright 2008-2013 Yii Software LLC
 * @license https://www.yiiframework.com/license/
 */

Yii::import('zii.widgets.jui.CJuiWidget');

/**
 * CJuiSortable makes selected elements sortable by dragging with the mouse.
 *
 * CJuiSortable encapsulates the {@link https://jqueryui.com/sortable/ JUI Sortable}
 * plugin.
 *
 * To use this widget, you may insert the following code in a view:
 * <pre>
 * $this->widget('zii.widgets.jui.CJuiSortable',array(
 *     'items'=>array(
 *         'id1'=>'Item 1',
 *         'id2'=>'Item 2',
 *         'id3'=>'Item 3',
 *     ),
 *     // additional javascript options for the JUI Sortable plugin
 *     'options'=>array(
 *         'delay'=>'300',
 *     ),
 * ));
 * </pre>
 *
 * By configuring the {@link options} property, you may specify the options
 * that need to be passed to the JUI Sortable plugin. Please refer to
 * the {@link https://api.jqueryui.com/sortable/ JUI Sortable API} documentation
 * for possible options (name-value pairs) and
 * {@link https://jqueryui.com/sortable/ JUI Sortable page} for general
 * description and demo.
 *
 * If you are using JavaScript expressions anywhere in the code, please wrap it
 * with {@link CJavaScriptExpression} and Yii will use it as code.
 *
 * @author Sebastian Thierer <sebathi@gmail.com>
 * @package zii.widgets.jui
 * @since 1.1
 */
class CJuiSortable extends CJuiWidget
{
	/**
	 * @var array list of sortable items (id=>item content).
	 * Note that the item contents will not be HTML-encoded.
	 */
	public $items = array();
	/**
	 * @var string the name of the container element that contains all items. Defaults to 'ul'.
	 */
	public $tagName = 'ul';
	/**
	 * @var string the template that is used to generated every sortable item.
	 * The token "{content}" in the template will be replaced with the item content,
	 * while "{id}" be replaced with the item ID.
	 */
	public $itemTemplate = '<li id="{id}">{content}</li>';

	/**
	 * Run this widget.
	 * This method registers necessary javascript and renders the needed HTML code.
	 */
	public function run()
	{
		$id = $this->getId();
		if (isset($this->htmlOptions['id']))
			$id = $this->htmlOptions['id'];
		else
			$this->htmlOptions['id'] = $id;

		$options = CJavaScript::encode($this->options);
		Yii::app()->getClientScript()->registerScript(__CLASS__ . '#' . $id, "jQuery('#{$id}').sortable({$options});");

		echo CHtml::openTag($this->tagName, $this->htmlOptions) . "\n";
		foreach ($this->items as $id => $content)
			echo strtr($this->itemTemplate, array('{id}' => $id, '{content}' => $content)) . "\n";
		echo CHtml::closeTag($this->tagName);
	}
}
