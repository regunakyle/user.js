/* 0102: set startup page [SETUP-CHROME]
 * 0=blank, 1=home, 2=last visited page, 3=resume previous session
 * [NOTE] Session Restore is cleared with history (2811+), and not used in Private Browsing mode
 * [SETTING] General>Startup>Restore previous session ***/
user_pref("browser.startup.page", 3);

/* 0403: disable SB checks for downloads (remote)
 * To verify the safety of certain executable files, Firefox may submit some information about the
 * file, including the name, origin, size and a cryptographic hash of the contents, to the Google
 * Safe Browsing service which helps Firefox determine whether or not the file should be blocked
 * [SETUP-SECURITY] If you do not understand this, or you want this protection, then override this ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", true);

// Non-Arkenfox changes
user_pref("accessibility.browsewithcaret_shortcut.enabled", false);
user_pref("accessibility.warn_on_browsewithcaret", false);
user_pref("general.autoScroll", true);
user_pref("media.gmp-gmpopenh264.autoupdate", true);
user_pref("media.gmp-gmpopenh264.enabled", true);
user_pref("media.gmp-gmpopenh264.provider.enabled", true);
user_pref("media.peerconnection.video.h264_enabled", true);
user_pref("services.sync.engine.prefs", false);
user_pref("signon.rememberSignons", false);
user_pref("dom.events.asyncClipboard.readText", false);
