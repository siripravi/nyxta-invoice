<div style="height:600px;">
<?php

Yii::app()->clientScript->registerCoreScript('jquery');

$this->widget('ext.pdfJs.QPdfJs',array(
	'url'=>'files/compressed.tracemonkey-pldi-09.pdf',
	))
?>
</div>