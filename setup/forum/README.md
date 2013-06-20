How to configure forum.
=======================

1. Copy setup/forum/install to root/forum/install
	
	$ cp setup/forum/install root/forum/install

2. Visit yourdomain.com/forum/install to configure forum

3. Remove root/forum/install

4. Visit https://code.google.com/apis/console register a API access

5. Change auth mod to google

	$ mysql -u root -p forum
	> UPDATE phpbb_config SET config_value = "google" WHERE config_name = "auth_method";
	> INSERT INTO phpbb_config (config_name, config_value, is_dynamic) VALUES("oauth_client_id", "your_client_id", 0),("oauth_client_secret", "your_client_secret", 0);
	> UPDATE phpbb_users SET username = "Google: your@email", username_clean = "google: your@email", user_password = "" WHERE user_id = 2;

6. Clear new user post limit
	
	> UPDATE phpbb_config SET config_value = 0 WHERE config_name = "new_member_post_limit";
	> UPDATE phpbb_users SET user_new = 0;

7. Clear phpbb cache

	$ rm root/forum/cache/*.php
