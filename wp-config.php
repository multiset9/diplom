<?php


// ** MySQL settings ** //
/** The name of the database for WordPress */
define('DB_NAME', "diplom");

/** MySQL database username */
define('DB_USER', "root");

/** MySQL database password */
define('DB_PASSWORD', "");

/** MySQL hostname */
define('DB_HOST', "localhost");

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('AUTH_KEY',         '4x5YFNR<C.FNX,g-#mOD8Qtv!Oj:,Mj^eJsy})@ruX-owY`D<+bki&b=Bg:#+juI');
define('SECURE_AUTH_KEY',  'lL!9/I5y=DiX|ebRTGHiqdajq)Irvr;=|0Q[0$p6K]r!p<VX;xU8;4LmFFn5&*,Z');
define('LOGGED_IN_KEY',    'u,1QViu|,s0oe+H51C-WS42Y]:zTJVC)N/irR;JyL8^+QnMps^~Otq<3I)Xg,+:~');
define('NONCE_KEY',        'nq}]*f.5nAiZA#^U&.oG5[+gqLfS9!+@B[m.ogBvQaF{w7pEl,j1%T:j;t9!xLkB');
define('AUTH_SALT',        '9hh?|-3Gg4HTiL#)| h8r7{Cg{>n<ECEUfi%ULXqf{Rw5;,+P=`w,@4dv8gm_k-|');
define('SECURE_AUTH_SALT', 'S]f2-+WC}6+H4)gb`p:>OrZM^;_kn-9g70OVRY[s=LxM>-[Jj3<A ?>V0i5My^8p');
define('LOGGED_IN_SALT',   ',;<DUgWHoHj%rJ@m2q3w.Pc*wy$KLN-n?~V};TFJFeJp8nhKAID*_PG&1%4Cr:4#');
define('NONCE_SALT',       'bU[|o/4{aI|#&|I@(fW=_s.h69E$Z?B!Jw,%r`X=)TKVQPEXs-g/V uRJ;-u`CE?');


$table_prefix = 'wp_';





define('FS_METHOD','direct');
define('ALLOW_UNFILTERED_UPLOADS', true);
define('WP_MEMORY_LIMIT','64M');
define('WP_DEBUG', false);
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
