<div class="col-sm-6" style="width:50%;float:left">
    <div class="card">
        <div class="heading">
            <h4 class="title"><i class="pe-7s-user"></i>Customer</h4>
        </div>
        <div class="content">
            <?php //echo $data->customer_no;
            ?>
            <?php $this->renderPartial('_custForm', array('stmt' => $data)); ?>

            <div class="footer">

            </div>

        </div>
    </div>
</div>
<div class="col-sm-6">
    <div class="panel panel-info">
        <div class="panel-heading">
            <h4 class="panel-title"><i class="pe-7s-plane"></i>Shipping</h4>

        </div>
        <div class="panel-body">
            <?php $this->renderPartial('_shipForm', array('stmt' => $data)); ?>
            <div class="footer">

                <div class="stats">

                    <!--  <i class="fa fa-circle text-danger"></i> Bounce
                        <i class="fa fa-circle text-warning"></i> Unsubscribe -->
                </div>
            </div>
        </div>
    </div>
</div>

<?php if ($data->primaryKey !== null) : ?>
    <?php

    $this->widget('application.components.widgets.invoice.InvWidget', array('pk' => $data->primaryKey));
    ?>
    <p class="text-muted well well-sm no-shadow" style="margin-top: 10px;">
        <strong>NOTE</strong><br>
        Prices do not include setup of Chairs, Tables, Linen, China, Silverware unless explicitly specified as a separate
        line item.<br>
        <b>Payment Terms:</b> 50% deposite due on Order Confirmation and the Balance is due to 2 weeks prior to the event.
    </p>
<?php endif; ?>