Welcome
<?php
$this->widget('ext.pdfJs.QPdfJs',array(
  'url'=>$this->createUrl('/file/view',array('id'=>$model->id,'format'=>Files::PDF))
));
