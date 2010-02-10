<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-type" content="text/html;charset=UTF-8" />

	<title>PHP example</title>

    <style type="text/css" media="screen">
        div {
            width: 100px;
            height: 100px;
            margin: 2px;
            float: left;
        }
    </style>

</head>
<body>

    <?php 
        $count = 72;
        for ($i=0; $i < $count; $i++):
            $hue = (360/$count) * $i;
    ?>
        <div style="background: hsla(<?= $hue ?>,100%,50%,1)"></div>
    <?php endfor; ?>

</body>
</html>