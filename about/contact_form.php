<?php
    function repopulate($input) {
        global $post;
        if( isset($post[$input]) ) echo $post[$input];
    }
?>

<form action="./#contact" method="post">
    <table>
        <tr>
            <td class="label"><label for="name">Name</label></td>
            <td class="field"><input type="text" class="text" name="name" value="<?php if(isset($post)) repopulate('name'); ?>" id="name" /></td>
        </tr>
        <tr>
            <td class="label"><label for="email">Email</label></td>
            <td class="field"><input type="text" class="text" name="email" value="<?php if(isset($post)) repopulate('email'); ?>" id="email" /></td>
        </tr>
        <tr>
            <td class="label"><label for="subject">Subject</label></td>
            <td class="field"><input type="text" class="text" name="subject" value="<?php if(isset($post)) repopulate('subject'); ?>" id="subject" /></td>
        </tr>
        <tr class="not_a_robot">
            <td class="label">Verification</td>
            <td class="field">
                <input type="checkbox" name="verification" value="no" id="verification" <?php if(isset($post['verification'])): ?> checked="checked"<?php endif; ?> />
                <label for="verification">I am not a robot</label> 
            </td>
        </tr>
        <tr class="message">
            <td class="label"><label for="message">Message</label></td>
            <td class="field"><textarea id="message" name="message" rows="8" cols="40"><?php if(isset($post)) repopulate('message'); ?></textarea></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <input type="submit" class="submit" name="send" value="Send" id="send" />
            </td>
        </tr>
    </table>
</form>