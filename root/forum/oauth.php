<?php

define('IN_PHPBB', true);
$phpbb_root_path = (defined('PHPBB_ROOT_PATH')) ? PHPBB_ROOT_PATH : './';
$phpEx = substr(strrchr(__FILE__, '.'), 1);
require($phpbb_root_path . 'common.' . $phpEx);
require($phpbb_root_path . 'includes/functions_user.' . $phpEx);
require($phpbb_root_path . 'includes/functions_module.' . $phpEx);

define('IN_LOGIN', true);

// Start session management
$user->session_begin();
$auth->acl($user->data);
$user->setup();

$info = false;
$method = trim(basename($config['auth_method']));
include_once($phpbb_root_path . 'includes/auth/auth_' . $method . '.' . $phpEx);
$method = 'oauth_redirect_info_' . $method;
if (function_exists($method))
{
	$info = $method();
}
if (!$info)
{
	redirect('index.' . $phpEx);
}

// Hack code
$_POST['login'] = 'Login';
$_REQUEST['credential'] = ($info->admin) ? md5(unique_id()) : false;

login_box($info ->redirect, $info->l_explain, $info->l_success, $info->admin);

//require($phpbb_root_path . 'adm/index.' . $phpEx);
//require($phpbb_root_path . 'ucp.' . $phpEx);

?>
