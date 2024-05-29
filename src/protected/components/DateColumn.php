<?php

class DateColumn extends CDataColumn
{
    //put your code here
    public $from_date;
    public $to_date;
    public function renderFilterCellContent()
    {
        echo CHtml::activeDateField($this->grid->filter, $this->name, array('id' => false, 'style' => 'display:none'));
        if (isset($this->from_date))
            echo CHtml::activeHiddenField($this->grid->filter, $this->from_date);
        if (isset($this->to_date))
            echo CHtml::activeHiddenField($this->grid->filter, $this->to_date);
    }
}
