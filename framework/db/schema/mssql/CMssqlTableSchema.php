<?php

/**
 * CMssqlTableSchema class file.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @author Christophe Boulain <Christophe.Boulain@gmail.com>
 * @link https://www.yiiframework.com/
 * @copyright 2008-2013 Yii Software LLC
 * @license https://www.yiiframework.com/license/
 */

/**
 * CMssqlTableSchema represents the metadata for a MSSQL table.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @author Christophe Boulain <Christophe.Boulain@gmail.com>
 * @package system.db.schema.mssql
 */
class CMssqlTableSchema extends CDbTableSchema
{
	/**
	 * @var string name of the catalog (database) that this table belongs to.
	 * Defaults to null, meaning no schema (or the current database).
	 */
	public $catalogName;
	/**
	 * @var string name of the schema that this table belongs to.
	 * Defaults to null, meaning no schema (or the current database owner).
	 */
	public $schemaName;
}
