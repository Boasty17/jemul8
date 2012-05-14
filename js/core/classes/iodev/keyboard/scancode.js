/*
 *	jemul8 - JavaScript x86 Emulator
 *	Copyright (c) 2012 http://ovms.co. All Rights Reserved.
 *	
 *	MODULE: Scancode support for Keyboard
 */

define([
	"../../../util"
], function (util) { "use strict";
	
	// Scancode static class constructor
	function Scancode() {
		util.panic("Scancode() is static-only!");
	}
	Scancode.getKeyName = function (key) {
		return this.keySymbols[ key ];
	}
	Scancode.getKeyIndex = function (name) {
		return this.keySymbols.indexOf(name);
	};
	// Table of bochs "KEY_*" symbols
	// the table must be in KEY_* order
	Scancode.keySymbols = [
		"KEY_CTRL_L",         "KEY_SHIFT_L",        "KEY_F1",
		"KEY_F2",             "KEY_F3",             "KEY_F4",
		"KEY_F5",             "KEY_F6",             "KEY_F7",
		"KEY_F8",             "KEY_F9",             "KEY_F10",
		"KEY_F11",            "KEY_F12",            "KEY_CTRL_R",
		"KEY_SHIFT_R",        "KEY_CAPS_LOCK",      "KEY_NUM_LOCK",
		"KEY_ALT_L",          "KEY_ALT_R",          "KEY_A",
		"KEY_B",              "KEY_C",              "KEY_D",
		"KEY_E",              "KEY_F",              "KEY_G",
		"KEY_H",              "KEY_I",              "KEY_J",
		"KEY_K",              "KEY_L",              "KEY_M",
		"KEY_N",              "KEY_O",              "KEY_P",
		"KEY_Q",              "KEY_R",              "KEY_S",
		"KEY_T",              "KEY_U",              "KEY_V",
		"KEY_W",              "KEY_X",              "KEY_Y",
		"KEY_Z",              "KEY_0",              "KEY_1",
		"KEY_2",              "KEY_3",              "KEY_4",
		"KEY_5",              "KEY_6",              "KEY_7",
		"KEY_8",              "KEY_9",              "KEY_ESC",
		"KEY_SPACE",          "KEY_SINGLE_QUOTE",   "KEY_COMMA",
		"KEY_PERIOD",         "KEY_SLASH",          "KEY_SEMICOLON",
		"KEY_EQUALS",         "KEY_LEFT_BRACKET",   "KEY_BACKSLASH",
		"KEY_RIGHT_BRACKET",  "KEY_MINUS",          "KEY_GRAVE",
		"KEY_BACKSPACE",      "KEY_ENTER",          "KEY_TAB",
		"KEY_LEFT_BACKSLASH", "KEY_PRINT",          "KEY_SCRL_LOCK",
		"KEY_PAUSE",          "KEY_INSERT",         "KEY_DELETE",
		"KEY_HOME",           "KEY_END",            "KEY_PAGE_UP",
		"KEY_PAGE_DOWN",      "KEY_KP_ADD",         "KEY_KP_SUBTRACT",
		"KEY_KP_END",         "KEY_KP_DOWN",        "KEY_KP_PAGE_DOWN",
		"KEY_KP_LEFT",        "KEY_KP_RIGHT",       "KEY_KP_HOME",
		"KEY_KP_UP",          "KEY_KP_PAGE_UP",     "KEY_KP_INSERT",
		"KEY_KP_DELETE",      "KEY_KP_5",           "KEY_UP",
		"KEY_DOWN",           "KEY_LEFT",           "KEY_RIGHT",
		"KEY_KP_ENTER",       "KEY_KP_MULTIPLY",    "KEY_KP_DIVIDE",
		"KEY_WIN_L",          "KEY_WIN_R",          "KEY_MENU",
		"KEY_ALT_SYSREQ",     "KEY_CTRL_BREAK",     "KEY_INT_BACK",
		"KEY_INT_FORWARD",    "KEY_INT_STOP",       "KEY_INT_MAIL",
		"KEY_INT_SEARCH",     "KEY_INT_FAV",        "KEY_INT_HOME",
		"KEY_POWER_MYCOMP",   "KEY_POWER_CALC",     "KEY_POWER_SLEEP",
		"KEY_POWER_POWER",    "KEY_POWER_WAKE"
	];
	Scancode.translation8042 = [
		0xff,0x43,0x41,0x3f,0x3d,0x3b,0x3c,0x58,0x64,0x44,0x42,0x40,0x3e,0x0f,0x29,0x59,
		0x65,0x38,0x2a,0x70,0x1d,0x10,0x02,0x5a,0x66,0x71,0x2c,0x1f,0x1e,0x11,0x03,0x5b,
		0x67,0x2e,0x2d,0x20,0x12,0x05,0x04,0x5c,0x68,0x39,0x2f,0x21,0x14,0x13,0x06,0x5d,
		0x69,0x31,0x30,0x23,0x22,0x15,0x07,0x5e,0x6a,0x72,0x32,0x24,0x16,0x08,0x09,0x5f,
		0x6b,0x33,0x25,0x17,0x18,0x0b,0x0a,0x60,0x6c,0x34,0x35,0x26,0x27,0x19,0x0c,0x61,
		0x6d,0x73,0x28,0x74,0x1a,0x0d,0x62,0x6e,0x3a,0x36,0x1c,0x1b,0x75,0x2b,0x63,0x76,
		0x55,0x56,0x77,0x78,0x79,0x7a,0x0e,0x7b,0x7c,0x4f,0x7d,0x4b,0x47,0x7e,0x7f,0x6f,
		0x52,0x53,0x50,0x4c,0x4d,0x48,0x01,0x45,0x57,0x4e,0x51,0x4a,0x37,0x49,0x46,0x54,
		0x80,0x81,0x82,0x41,0x54,0x85,0x86,0x87,0x88,0x89,0x8a,0x8b,0x8c,0x8d,0x8e,0x8f,
		0x90,0x91,0x92,0x93,0x94,0x95,0x96,0x97,0x98,0x99,0x9a,0x9b,0x9c,0x9d,0x9e,0x9f,
		0xa0,0xa1,0xa2,0xa3,0xa4,0xa5,0xa6,0xa7,0xa8,0xa9,0xaa,0xab,0xac,0xad,0xae,0xaf,
		0xb0,0xb1,0xb2,0xb3,0xb4,0xb5,0xb6,0xb7,0xb8,0xb9,0xba,0xbb,0xbc,0xbd,0xbe,0xbf,
		0xc0,0xc1,0xc2,0xc3,0xc4,0xc5,0xc6,0xc7,0xc8,0xc9,0xca,0xcb,0xcc,0xcd,0xce,0xcf,
		0xd0,0xd1,0xd2,0xd3,0xd4,0xd5,0xd6,0xd7,0xd8,0xd9,0xda,0xdb,0xdc,0xdd,0xde,0xdf,
		0xe0,0xe1,0xe2,0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,0xea,0xeb,0xec,0xed,0xee,0xef,
		0xf0,0xf1,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,0xf9,0xfa,0xfb,0xfc,0xfd,0xfe,0xff
	];
	// Definition of scancodes make and break,
	// for each set (mf1/xt , mf2/at , mf3/ps2)
	// The table must be in KEY order
	//
	Scancode.scancodes = [
	 [ // KEY_CTRL_L ( ibm 58)
	   [ [ 0x1D ], [ 0x9D ] ],
	   [ [ 0x14 ], [ 0xF0, 0x14 ] ],
	   [ [ 0x11 ], [ 0xF0, 0x11 ] ]
	 ],

	 [ // KEY_SHIFT_L ( ibm 44)
	   [ [ 0x2A ], [ 0xAA ] ],
	   [ [ 0x12 ], [ 0xF0, 0x12 ] ],
	   [ [ 0x12 ], [ 0xF0, 0x12 ] ]
	 ],

	 [ // KEY_F1 (ibm 112)
	   [ [ 0x3B ], [ 0xBB ] ],
	   [ [ 0x05 ], [ 0xF0, 0x05 ] ],
	   [ [ 0x07 ], [ 0xF0, 0x07 ] ]
	 ],

	 [ // KEY_F2 (ibm 113)
	   [ [ 0x3C ], [ 0xBC ] ],
	   [ [ 0x06 ], [ 0xF0, 0x06 ] ],
	   [ [ 0x0F ], [ 0xF0, 0x0F ] ]
	 ],

	 [ // KEY_F3 (ibm 114)
	   [ [ 0x3D ], [ 0xBD ] ],
	   [ [ 0x04 ], [ 0xF0, 0x04 ] ],
	   [ [ 0x17 ], [ 0xF0, 0x17 ] ]
	 ],

	 [ // KEY_F4 (ibm 115)
	   [ [ 0x3E ], [ 0xBE ] ],
	   [ [ 0x0C ], [ 0xF0, 0x0C ] ],
	   [ [ 0x1F ], [ 0xF0, 0x1F ] ]
	 ],

	 [ // KEY_F5 (ibm 116)
	   [ [ 0x3F ], [ 0xBF ] ],
	   [ [ 0x03 ], [ 0xF0, 0x03 ] ],
	   [ [ 0x27 ], [ 0xF0, 0x27 ] ]
	 ],

	 [ // KEY_F6 (ibm 117)
	   [ [ 0x40 ], [ 0xC0 ] ],
	   [ [ 0x0B ], [ 0xF0, 0x0B ] ],
	   [ [ 0x2F ], [ 0xF0, 0x2F ] ]
	 ],

	 [ // KEY_F7 (ibm 118)
	   [ [ 0x41 ], [ 0xC1 ] ],
	   [ [ 0x83 ], [ 0xF0, 0x83 ] ],
	   [ [ 0x37 ], [ 0xF0, 0x37 ] ]
	],

	 [ // KEY_F8 (ibm 119)
	   [ [ 0x42 ], [ 0xC2 ] ],
	   [ [ 0x0A ], [ 0xF0, 0x0A ] ],
	   [ [ 0x3F ], [ 0xF0, 0x3F ] ]
	 ],

	 [ // KEY_F9 (ibm 120)
	   [ [ 0x43 ], [ 0xC3 ] ],
	   [ [ 0x01 ], [ 0xF0, 0x01 ] ],
	   [ [ 0x47 ], [ 0xF0, 0x47 ] ]
	 ],

	 [ // KEY_F10 (ibm 121)
	   [ [ 0x44 ], [ 0xC4 ] ],
	   [ [ 0x09 ], [ 0xF0, 0x09 ] ],
	   [ [ 0x4F ], [ 0xF0, 0x4F ] ]
	 ],

	 [ // KEY_F11 (ibm 122)
	   [ [ 0x57 ], [ 0xD7 ] ],
	   [ [ 0x78 ], [ 0xF0, 0x78 ] ],
	   [ [ 0x56 ], [ 0xF0, 0x56 ] ]
	 ],

	 [ // KEY_F12 (ibm 123)
	   [ [ 0x58 ], [ 0xD8 ] ],
	   [ [ 0x07 ], [ 0xF0, 0x07 ] ],
	   [ [ 0x5E ], [ 0xF0, 0x5E ] ]
	 ],

	 [ // KEY_CTRL_R (ibm 64)
	   [ [ 0xE0, 0x1D ], [ 0xE0, 0x9D ] ],
	   [ [ 0xE0, 0x14 ], [ 0xE0, 0xF0, 0x14 ] ],
	   [ [ 0x58 ], [ 0xF0, 0x58 ] ]
	 ],

	 [ // KEY_SHIFT_R (ibm 57)
	   [ [ 0x36 ], [ 0xB6 ] ],
	   [ [ 0x59 ], [ 0xF0, 0x59 ] ],
	   [ [ 0x59 ], [ 0xF0, 0x59 ] ]
	 ],

	 [ // KEY_CAPS_LOCK (ibm 30)
	   [ [ 0x3A ], [ 0xBA ] ],
	   [ [ 0x58 ], [ 0xF0, 0x58 ] ],
	   [ [ 0x14 ], [ 0xF0, 0x14 ] ]
	 ],

	 [ // KEY_NUM_LOCK (ibm 90)
	   [ [ 0x45 ], [ 0xC5 ] ],
	   [ [ 0x77 ], [ 0xF0, 0x77 ] ],
	   [ [ 0x76 ], [ 0xF0, 0x76 ] ]
	 ],

	 [ // KEY_ALT_L (ibm 60)
	   [ [ 0x38 ], [ 0xB8 ] ],
	   [ [ 0x11 ], [ 0xF0, 0x11 ] ],
	   [ [ 0x19 ], [ 0xF0, 0x19 ] ]
	 ],

	 [ // KEY_ALT_R (ibm 62)
	   [ [ 0xE0, 0x38 ], [ 0xE0, 0xB8 ] ],
	   [ [ 0xE0, 0x11 ], [ 0xE0, 0xF0, 0x11 ] ],
	   [ [ 0x39 ], [ 0xF0, 0x39 ] ]
	 ],

	 [ // KEY_A (ibm 31)
	   [ [ 0x1E ], [ 0x9E ] ],
	   [ [ 0x1C ], [ 0xF0, 0x1C ] ],
	   [ [ 0x1C ], [ 0xF0, 0x1C ] ]
	 ],

	 [ // KEY_B (ibm 50)
	   [ [ 0x30 ], [ 0xB0 ] ],
	   [ [ 0x32 ], [ 0xF0, 0x32 ] ],
	   [ [ 0x32 ], [ 0xF0, 0x32 ] ]
	 ],

	 [ // KEY_C (ibm 48)
	   [ [ 0x2E ], [ 0xAE ] ],
	   [ [ 0x21 ], [ 0xF0, 0x21 ] ],
	   [ [ 0x21 ], [ 0xF0, 0x21 ] ]
	 ],

	 [ // KEY_D (ibm 33)
	   [ [ 0x20 ], [ 0xA0 ] ],
	   [ [ 0x23 ], [ 0xF0, 0x23 ] ],
	   [ [ 0x23 ], [ 0xF0, 0x23 ] ]
	 ],

	 [ // KEY_E (ibm 19)
	   [ [ 0x12 ], [ 0x92 ] ],
	   [ [ 0x24 ], [ 0xF0, 0x24 ] ],
	   [ [ 0x24 ], [ 0xF0, 0x24 ] ]
	 ],

	 [ // KEY_F (ibm 34)
	   [ [ 0x21 ], [ 0xA1 ] ],
	   [ [ 0x2B ], [ 0xF0, 0x2B ] ],
	   [ [ 0x2B ], [ 0xF0, 0x2B ] ]
	 ],

	 [ // KEY_G (ibm 35)
	   [ [ 0x22 ], [ 0xA2 ] ],
	   [ [ 0x34 ], [ 0xF0, 0x34 ] ],
	   [ [ 0x34 ], [ 0xF0, 0x34 ] ]
	 ],

	 [ // KEY_H (ibm 36)
	   [ [ 0x23 ], [ 0xA3 ] ],
	   [ [ 0x33 ], [ 0xF0, 0x33 ] ],
	   [ [ 0x33 ], [ 0xF0, 0x33 ] ]
	 ],

	 [ // KEY_I (ibm 24)
	   [ [ 0x17 ], [ 0x97 ] ],
	   [ [ 0x43 ], [ 0xF0, 0x43 ] ],
	   [ [ 0x43 ], [ 0xF0, 0x43 ] ]
	 ],

	 [ // KEY_J (ibm 37)
	   [ [ 0x24 ], [ 0xA4 ] ],
	   [ [ 0x3B ], [ 0xF0, 0x3B ] ],
	   [ [ 0x3B ], [ 0xF0, 0x3B ] ]
	 ],

	 [ // KEY_K (ibm 38)
	   [ [ 0x25 ], [ 0xA5 ] ],
	   [ [ 0x42 ], [ 0xF0, 0x42 ] ],
	   [ [ 0x42 ], [ 0xF0, 0x42 ] ],
	 ],

	 [ // KEY_L (ibm 39)
	   [ [ 0x26 ], [ 0xA6 ] ],
	   [ [ 0x4B ], [ 0xF0, 0x4B ] ],
	   [ [ 0x4B ], [ 0xF0, 0x4B ] ]
	 ],

	 [ // KEY_M (ibm 52)
	   [ [ 0x32 ], [ 0xB2 ] ],
	   [ [ 0x3A ], [ 0xF0, 0x3A ] ],
	   [ [ 0x3A ], [ 0xF0, 0x3A ] ]
	 ],

	 [ // KEY_N (ibm 51)
	   [ [ 0x31 ], [ 0xB1 ] ],
	   [ [ 0x31 ], [ 0xF0, 0x31 ] ],
	   [ [ 0x31 ], [ 0xF0, 0x31 ] ]
	 ],

	 [ // KEY_O (ibm 25)
	   [ [ 0x18 ], [ 0x98 ] ],
	   [ [ 0x44 ], [ 0xF0, 0x44 ] ],
	   [ [ 0x44 ], [ 0xF0, 0x44 ] ]
	 ],

	 [ // KEY_P (ibm 26)
	   [ [ 0x19 ], [ 0x99 ] ],
	   [ [ 0x4D ], [ 0xF0, 0x4D ] ],
	   [ [ 0x4D ], [ 0xF0, 0x4D ] ]
	 ],

	 [ // KEY_Q (ibm 17)
	   [ [ 0x10 ], [ 0x90 ] ],
	   [ [ 0x15 ], [ 0xF0, 0x15 ] ],
	   [ [ 0x15 ], [ 0xF0, 0x15 ] ]
	 ],

	 [ // KEY_R (ibm 20)
	   [ [ 0x13 ], [ 0x93 ] ],
	   [ [ 0x2D ], [ 0xF0, 0x2D ] ],
	   [ [ 0x2D ], [ 0xF0, 0x2D ] ]
	 ],

	 [ // KEY_S (ibm 32)
	   [ [ 0x1F ], [ 0x9F ] ],
	   [ [ 0x1B ], [ 0xF0, 0x1B ] ],
	   [ [ 0x1B ], [ 0xF0, 0x1B ] ]
	 ],

	 [ // KEY_T (ibm 21)
	   [ [ 0x14 ], [ 0x94 ] ],
	   [ [ 0x2C ], [ 0xF0, 0x2C ] ],
	   [ [ 0x2C ], [ 0xF0, 0x2C ] ]
	 ],

	 [ // KEY_U (ibm 23)
	   [ [ 0x16 ], [ 0x96 ] ],
	   [ [ 0x3C ], [ 0xF0, 0x3C ] ],
	   [ [ 0x3C ], [ 0xF0, 0x3C ] ]
	 ],

	 [ // KEY_V (ibm 49)
	   [ [ 0x2F ], [ 0xAF ] ],
	   [ [ 0x2A ], [ 0xF0, 0x2A ] ],
	   [ [ 0x2A ], [ 0xF0, 0x2A ] ]
	 ],

	 [ // KEY_W (ibm 18)
	   [ [ 0x11 ], [ 0x91 ] ],
	   [ [ 0x1D ], [ 0xF0, 0x1D ] ],
	   [ [ 0x1D ], [ 0xF0, 0x1D ] ]
	 ],

	 [ // KEY_X (ibm 47)
	   [ [ 0x2D ], [ 0xAD ] ],
	   [ [ 0x22 ], [ 0xF0, 0x22 ] ],
	   [ [ 0x22 ], [ 0xF0, 0x22 ] ]
	 ],

	 [ // KEY_Y (ibm 22)
	   [ [ 0x15 ], [ 0x95 ] ],
	   [ [ 0x35 ], [ 0xF0, 0x35 ] ],
	   [ [ 0x35 ], [ 0xF0, 0x35 ] ]
	 ],

	 [ // KEY_Z (ibm 46)
	   [ [ 0x2C ], [ 0xAC ] ],
	   [ [ 0x1A ], [ 0xF0, 0x1A ] ],
	   [ [ 0x1A ], [ 0xF0, 0x1A ] ]
	 ],

	 [ // KEY_0 (ibm 11)
	   [ [ 0x0B ], [ 0x8B ] ],
	   [ [ 0x45 ], [ 0xF0, 0x45 ] ],
	   [ [ 0x45 ], [ 0xF0, 0x45 ] ]
	 ],

	 [ // KEY_1 (ibm 2)
	   [ [ 0x02 ], [ 0x82 ] ],
	   [ [ 0x16 ], [ 0xF0, 0x16 ] ],
	   [ [ 0x16 ], [ 0xF0, 0x16 ] ]
	 ],

	 [ // KEY_2 (ibm 3)
	   [ [ 0x03 ], [ 0x83 ] ],
	   [ [ 0x1E ], [ 0xF0, 0x1E ] ],
	   [ [ 0x1E ], [ 0xF0, 0x1E ] ]
	 ],

	 [ // KEY_3 (ibm 4)
	   [ [ 0x04 ], [ 0x84 ] ],
	   [ [ 0x26 ], [ 0xF0, 0x26 ] ],
	   [ [ 0x26 ], [ 0xF0, 0x26 ] ]
	 ],

	 [ // KEY_4 (ibm 5)
	   [ [ 0x05 ], [ 0x85 ] ],
	   [ [ 0x25 ], [ 0xF0, 0x25 ] ],
	   [ [ 0x25 ], [ 0xF0, 0x25 ] ]
	 ],

	 [ // KEY_5 (ibm 6)
	   [ [ 0x06 ], [ 0x86 ] ],
	   [ [ 0x2E ], [ 0xF0, 0x2E ] ],
	   [ [ 0x2E ], [ 0xF0, 0x2E ] ]
	 ],

	 [ // KEY_6 (ibm 7)
	   [ [ 0x07 ], [ 0x87 ] ],
	   [ [ 0x36 ], [ 0xF0, 0x36 ] ],
	   [ [ 0x36 ], [ 0xF0, 0x36 ] ]
	 ],

	 [ // KEY_7 (ibm 8)
	   [ [ 0x08 ], [ 0x88 ] ],
	   [ [ 0x3D ], [ 0xF0, 0x3D ] ],
	   [ [ 0x3D ], [ 0xF0, 0x3D ] ]
	 ],

	 [ // KEY_8 (ibm 9)
	   [ [ 0x09 ], [ 0x89 ] ],
	   [ [ 0x3E ], [ 0xF0, 0x3E ] ],
	   [ [ 0x3E ], [ 0xF0, 0x3E ] ]
	 ],

	 [ // KEY_9 (ibm 10)
	   [ [ 0x0A ], [ 0x8A ] ],
	   [ [ 0x46 ], [ 0xF0, 0x46 ] ],
	   [ [ 0x46 ], [ 0xF0, 0x46 ] ]
	 ],

	 [ // KEY_ESC (ibm 110)
	   [ [ 0x01 ], [ 0x81 ] ],
	   [ [ 0x76 ], [ 0xF0, 0x76 ] ],
	   [ [ 0x08 ], [ 0xF0, 0x08 ] ]
	 ],

	 [ // KEY_SPACE (ibm 61)
	   [ [ 0x39 ], [ 0xB9 ] ],
	   [ [ 0x29 ], [ 0xF0, 0x29 ] ],
	   [ [ 0x29 ], [ 0xF0, 0x29 ] ]
	 ],

	 [ // KEY_SINGLE_QUOTE (ibm 41)
	   [ [ 0x28 ], [ 0xA8 ] ],
	   [ [ 0x52 ], [ 0xF0, 0x52 ] ],
	   [ [ 0x52 ], [ 0xF0, 0x52 ] ]
	 ],

	 [ // KEY_COMMA (ibm 53)
	   [ [ 0x33 ], [ 0xB3 ] ],
	   [ [ 0x41 ], [ 0xF0, 0x41 ] ],
	   [ [ 0x41 ], [ 0xF0, 0x41 ] ]
	 ],

	 [ // KEY_PERIOD (ibm 54)
	   [ [ 0x34 ], [ 0xB4 ] ],
	   [ [ 0x49 ], [ 0xF0, 0x49 ] ],
	   [ [ 0x49 ], [ 0xF0, 0x49 ] ]
	 ],

	 [ // KEY_SLASH (ibm 55)
	   [ [ 0x35 ], [ 0xB5 ] ],
	   [ [ 0x4A ], [ 0xF0, 0x4A ] ],
	   [ [ 0x4A ], [ 0xF0, 0x4A ] ]
	 ],

	 [ // KEY_SEMICOLON (ibm 40)
	   [ [ 0x27 ], [ 0xA7 ] ],
	   [ [ 0x4C ], [ 0xF0, 0x4C ] ],
	   [ [ 0x4C ], [ 0xF0, 0x4C ] ]
	 ],

	 [ // KEY_EQUALS (ibm 13)
	   [ [ 0x0D ], [ 0x8D ] ],
	   [ [ 0x55 ], [ 0xF0, 0x55 ] ],
	   [ [ 0x55 ], [ 0xF0, 0x55 ] ]
	 ],

	 [ // KEY_LEFT_BRACKET (ibm 27)
	   [ [ 0x1A ], [ 0x9A ] ],
	   [ [ 0x54 ], [ 0xF0, 0x54 ] ],
	   [ [ 0x54 ], [ 0xF0, 0x54 ] ]
	 ],

	 [ // KEY_BACKSLASH ( ibm 42, 29)
	   [ [ 0x2B ], [ 0xAB ] ],
	   [ [ 0x5D ], [ 0xF0, 0x5D ] ],
	   [ [ 0x53 ], [ 0xF0, 0x53 ] ]
	 ],

	 [ // KEY_RIGHT_BRACKET (ibm 28)
	   [ [ 0x1B ], [ 0x9B ] ],
	   [ [ 0x5B ], [ 0xF0, 0x5B ] ],
	   [ [ 0x5B ], [ 0xF0, 0x5B ] ]
	 ],

	 [ // KEY_MINUS (ibm 12)
	   [ [ 0x0C ], [ 0x8C ] ],
	   [ [ 0x4E ], [ 0xF0, 0x4E ] ],
	   [ [ 0x4E ], [ 0xF0, 0x4E ] ]
	 ],

	 [ // KEY_GRAVE (ibm 1)
	   [ [ 0x29 ], [ 0xA9 ] ],
	   [ [ 0x0E ], [ 0xF0, 0x0E ] ],
	   [ [ 0x0E ], [ 0xF0, 0x0E ] ]
	 ],

	 [ // KEY_BACKSPACE (ibm 15)
	   [ [ 0x0E ], [ 0x8E ] ],
	   [ [ 0x66 ], [ 0xF0, 0x66 ] ],
	   [ [ 0x66 ], [ 0xF0, 0x66 ] ]
	 ],

	 [ // KEY_ENTER (ibm 43)
	   [ [ 0x1C ], [ 0x9C ] ],
	   [ [ 0x5A ], [ 0xF0, 0x5A ] ],
	   [ [ 0x5A ], [ 0xF0, 0x5A ] ]
	 ],

	 [ // KEY_TAB (ibm 16)
	   [ [ 0x0F ], [ 0x8F ] ],
	   [ [ 0x0D ], [ 0xF0, 0x0D ] ],
	   [ [ 0x0D ], [ 0xF0, 0x0D ] ]
	 ],

	 [ // KEY_LEFT_BACKSLASH (ibm 45)
	   [ [ 0x56 ], [ 0xD6 ] ],
	   [ [ 0x61 ], [ 0xF0, 0x61 ] ],
	   [ [ 0x13 ], [ 0xF0, 0x13 ] ]
	 ],

	 [ // KEY_PRINT (ibm 124)
	   [ [ 0xE0, 0x2A, 0xE0, 0x37 ], [ 0xE0, 0xB7, 0xE0, 0xAA ] ],
	   [ [ 0xE0, 0x12, 0xE0, 0x7C ], [ 0xE0, 0xF0, 0x7C, 0xE0, 0xF0, 0x12 ] ],
	   [ [ 0x57 ], [ 0xF0, 0x57 ] ]
	 ],

	 [ // KEY_SCRL_LOCK (ibm 125)
	   [ [ 0x46 ], [ 0xC6 ] ],
	   [ [ 0x7E ], [ 0xF0, 0x7E ] ],
	   [ [ 0x5F ], [ 0xF0, 0x5F ] ]
	 ],

	 [ // KEY_PAUSE (ibm 126)
	   [ [ 0xE1, 0x1D, 0x45, 0xE1, 0x9D, 0xC5 ], [] ],
	   [ [ 0xE1, 0x14, 0x77, 0xE1, 0xF0, 0x14, 0xF0, 0x77 ], [] ],
	   [ [ 0x62 ], [ 0xF0, 0x62 ] ]
	 ],

	 [ // KEY_INSERT (ibm 75)
	   [ [ 0xE0, 0x52 ], [ 0xE0, 0xD2 ] ],
	   [ [ 0xE0, 0x70 ], [ 0xE0, 0xF0, 0x70 ] ],
	   [ [ 0x67 ], [ 0xF0, 0x67 ] ]
	 ],

	 [ // KEY_DELETE (ibm 76)
	   [ [ 0xE0, 0x53 ], [ 0xE0, 0xD3 ] ],
	   [ [ 0xE0, 0x71 ], [ 0xE0, 0xF0, 0x71 ] ],
	   [ [ 0x64 ], [ 0xF0, 0x64 ] ]
	 ],

	 [ // KEY_HOME (ibm 80)
	   [ [ 0xE0, 0x47 ], [ 0xE0, 0xC7 ] ],
	   [ [ 0xE0, 0x6C ], [ 0xE0, 0xF0, 0x6C ] ],
	   [ [ 0x6E ], [ 0xF0, 0x6E ] ]
	 ],

	 [ // KEY_END (ibm 81)
	   [ [ 0xE0, 0x4F ], [ 0xE0, 0xCF ] ],
	   [ [ 0xE0, 0x69 ], [ 0xE0, 0xF0, 0x69 ] ],
	   [ [ 0x65 ], [ 0xF0, 0x65 ] ]
	 ],

	 [ // KEY_PAGE_UP (ibm 85)
	   [ [ 0xE0, 0x49 ], [ 0xE0, 0xC9 ] ],
	   [ [ 0xE0, 0x7D ], [ 0xE0, 0xF0, 0x7D ] ],
	   [ [ 0x6F ], [ 0xF0, 0x6F ] ]
	 ],

	 [ // KEY_PAGE_DOWN (ibm 86)
	   [ [ 0xE0, 0x51 ], [ 0xE0, 0xD1 ] ],
	   [ [ 0xE0, 0x7A ], [ 0xE0, 0xF0, 0x7A ] ],
	   [ [ 0x6D ], [ 0xF0, 0x6D ] ]
	 ],

	 [ // KEY_KP_ADD (ibm 106)
	   [ [ 0x4E ], [ 0xCE ] ],
	   [ [ 0x79 ], [ 0xF0, 0x79 ] ],
	   [ [ 0x7C ], [ 0xF0, 0x7C ] ]
	 ],

	 [ // KEY_KP_SUBTRACT (ibm 105)
	   [ [ 0x4A ], [ 0xCA ] ],
	   [ [ 0x7B ], [ 0xF0, 0x7B ] ],
	   [ [ 0x84 ], [ 0xF0, 0x84 ] ]
	 ],

	 [ // KEY_KP_END (ibm 93)
	   [ [ 0x4F ], [ 0xCF ] ],
	   [ [ 0x69 ], [ 0xF0, 0x69 ] ],
	   [ [ 0x69 ], [ 0xF0, 0x69 ] ]
	 ],

	 [ // KEY_KP_DOWN (ibm 98)
	   [ [ 0x50 ], [ 0xD0 ] ],
	   [ [ 0x72 ], [ 0xF0, 0x72 ] ],
	   [ [ 0x72 ], [ 0xF0, 0x72 ] ]
	 ],

	 [ // KEY_KP_PAGE_DOWN (ibm 103)
	   [ [ 0x51 ], [ 0xD1 ] ],
	   [ [ 0x7A ], [ 0xF0, 0x7A ] ],
	   [ [ 0x7A ], [ 0xF0, 0x7A ] ]
	 ],

	 [ // KEY_KP_LEFT (ibm 92)
	   [ [ 0x4B ], [ 0xCB ] ],
	   [ [ 0x6B ], [ 0xF0, 0x6B ] ],
	   [ [ 0x6B ], [ 0xF0, 0x6B ] ]
	 ],

	 [ // KEY_KP_RIGHT (ibm 102)
	   [ [ 0x4D ], [ 0xCD ] ],
	   [ [ 0x74 ], [ 0xF0, 0x74 ] ],
	   [ [ 0x74 ], [ 0xF0, 0x74 ] ]
	 ],

	 [ // KEY_KP_HOME (ibm 91)
	   [ [ 0x47 ], [ 0xC7 ] ],
	   [ [ 0x6C ], [ 0xF0, 0x6C ] ],
	   [ [ 0x6C ], [ 0xF0, 0x6C ] ]
	 ],

	 [ // KEY_KP_UP (ibm 96)
	   [ [ 0x48 ], [ 0xC8 ] ],
	   [ [ 0x75 ], [ 0xF0, 0x75 ] ],
	   [ [ 0x75 ], [ 0xF0, 0x75 ] ]
	 ],

	 [ // KEY_KP_PAGE_UP (ibm 101)
	   [ [ 0x49 ], [ 0xC9 ] ],
	   [ [ 0x7D ], [ 0xF0, 0x7D ] ],
	   [ [ 0x7D ], [ 0xF0, 0x7D ] ]
	 ],

	 [ // KEY_KP_INSERT (ibm 99)
	   [ [ 0x52 ], [ 0xD2 ] ],
	   [ [ 0x70 ], [ 0xF0, 0x70 ] ],
	   [ [ 0x70 ], [ 0xF0, 0x70 ] ]
	 ],

	 [ // KEY_KP_DELETE (ibm 104)
	   [ [ 0x53 ], [ 0xD3 ] ],
	   [ [ 0x71 ], [ 0xF0, 0x71 ] ],
	   [ [ 0x71 ], [ 0xF0, 0x71 ] ]
	 ],

	 [ // KEY_KP_5 (ibm 97)
	   [ [ 0x4C ], [ 0xCC ] ],
	   [ [ 0x73 ], [ 0xF0, 0x73 ] ],
	   [ [ 0x73 ], [ 0xF0, 0x73 ] ]
	 ],

	 [ // KEY_UP (ibm 83)
	   [ [ 0xE0, 0x48 ], [ 0xE0, 0xC8 ] ],
	   [ [ 0xE0, 0x75 ], [ 0xE0, 0xF0, 0x75 ] ],
	   [ [ 0x63 ], [ 0xF0, 0x63 ] ]
	 ],

	 [ // KEY_DOWN (ibm 84)
	   [ [ 0xE0, 0x50 ], [ 0xE0, 0xD0 ] ],
	   [ [ 0xE0, 0x72 ], [ 0xE0, 0xF0, 0x72 ] ],
	   [ [ 0x60 ], [ 0xF0, 0x60 ] ]
	 ],

	 [ // KEY_LEFT (ibm 79)
	   [ [ 0xE0, 0x4B ], [ 0xE0, 0xCB ] ],
	   [ [ 0xE0, 0x6B ], [ 0xE0, 0xF0, 0x6B ] ],
	   [ [ 0x61 ], [ 0xF0, 0x61 ] ]
	 ],

	 [ // KEY_RIGHT (ibm 89)
	   [ [ 0xE0, 0x4D ], [ 0xE0, 0xCD ] ],
	   [ [ 0xE0, 0x74 ], [ 0xE0, 0xF0, 0x74 ] ],
	   [ [ 0x6A ], [ 0xF0, 0x6A ] ]
	 ],

	 [ // KEY_KP_ENTER (ibm 108)
	   [ [ 0xE0, 0x1C ], [ 0xE0, 0x9C ] ],
	   [ [ 0xE0, 0x5A ], [ 0xE0, 0xF0, 0x5A ] ],
	   [ [ 0x79 ], [ 0xF0, 0x79 ] ]
	 ],

	 [ // KEY_KP_MULTIPLY (ibm 100)
	   [ [ 0x37 ], [ 0xB7 ] ],
	   [ [ 0x7C ], [ 0xF0, 0x7C ] ],
	   [ [ 0x7E ], [ 0xF0, 0x7E ] ]
	 ],

	 [ // KEY_KP_DIVIDE (ibm 95)
	   [ [ 0xE0, 0x35 ], [ 0xE0, 0xB5 ] ],
	   [ [ 0xE0, 0x4A ], [ 0xE0, 0xF0, 0x4A ] ],
	   [ [ 0x77 ], [ 0xF0, 0x77 ] ]
	 ],

	 [ // KEY_WIN_L
	   [ [ 0xE0, 0x5B ], [ 0xE0, 0xDB ] ],
	   [ [ 0xE0, 0x1F ], [ 0xE0, 0xF0, 0x1F ] ],
	   [ [ 0x8B ], [ 0xF0, 0x8B ] ],
	 ],

	 [ // KEY_WIN_R
	   [ [ 0xE0, 0x5C ], [ 0xE0, 0xDC ] ],
	   [ [ 0xE0, 0x27 ], [ 0xE0, 0xF0, 0x27 ] ],
	   [ [ 0x8C ], [ 0xF0, 0x8C ] ]
	 ],

	 [ // KEY_MENU
	   [ [ 0xE0, 0x5D ], [ 0xE0, 0xDD ] ],
	   [ [ 0xE0, 0x2F ], [ 0xE0, 0xF0, 0x2F ] ],
	   [ [ 0x8D ], [ 0xF0, 0x8D ] ]
	 ],

	 [ // KEY_ALT_SYSREQ
	   [ [ 0x54 ], [ 0xD4 ] ],
	   [ [ 0x84 ], [ 0xF0, 0x84 ] ],
	   [ [ 0x57 ], [ 0xF0, 0x57 ] ]
	 ],

	 [ // KEY_CTRL_BREAK
	   [ [ 0xE0, 0x46 ], [ 0xE0, 0xC6 ] ],
	   [ [ 0xE0, 0x7E ], [ 0xE0, 0xF0, 0x7E ] ],
	   [ [ 0x62 ], [ 0xF0, 0x62 ] ]
	 ],

	 [ // KEY_INT_BACK
	   [ [ 0xE0, 0x6A ], [ 0xE0, 0xEA ] ],
	   [ [ 0xE0, 0x38 ], [ 0xE0, 0xF0, 0x38 ] ],
	   [ [ 0x38 ], [ 0xF0, 0x38 ] ]
	 ],

	 [ // KEY_INT_FORWARD
	   [ [ 0xE0, 0x69 ], [ 0xE0, 0xE9 ] ],
	   [ [ 0xE0, 0x30 ], [ 0xE0, 0xF0, 0x30 ] ],
	   [ [ 0x30 ], [ 0xF0, 0x30 ] ]
	 ],

	 [ // KEY_INT_STOP
	   [ [ 0xE0, 0x68 ], [ 0xE0, 0xE8 ] ],
	   [ [ 0xE0, 0x28 ], [ 0xE0, 0xF0, 0x28 ] ],
	   [ [ 0x28 ], [ 0xF0, 0x28 ] ]
	 ],

	 [ // KEY_INT_MAIL
	   [ [ 0xE0, 0x6C ], [ 0xE0, 0xEC ] ],
	   [ [ 0xE0, 0x48 ], [ 0xE0, 0xF0, 0x48 ] ],
	   [ [ 0x48 ], [ 0xF0, 0x48 ] ]
	 ],

	 [ // KEY_INT_SEARCH
	   [ [ 0xE0, 0x65 ], [ 0xE0, 0xE5 ] ],
	   [ [ 0xE0, 0x10 ], [ 0xE0, 0xF0, 0x10 ] ],
	   [ [ 0x10 ], [ 0xF0, 0x10 ] ]
	 ],

	 [ // KEY_INT_FAV
	   [ [ 0xE0, 0x66 ], [ 0xE0, 0xE6 ] ],
	   [ [ 0xE0, 0x18 ], [ 0xE0, 0xF0, 0x18 ] ],
	   [ [ 0x18 ], [ 0xF0, 0x18 ] ]
	 ],

	 [ // KEY_INT_HOME
	   [ [ 0xE0, 0x32 ], [ 0xE0, 0xB2 ] ],
	   [ [ 0xE0, 0x3A ], [ 0xE0, 0xF0, 0x3A ] ],
	   [ [ 0x97 ], [ 0xF0, 0x97 ] ]
	 ],

	 [ // KEY_POWER_MYCOMP
	   [ [ 0xE0, 0x6B ], [ 0xE0, 0xEB ] ],
	   [ [ 0xE0, 0x40 ], [ 0xE0, 0xF0, 0x40 ] ],
	   [ [ 0x40 ], [ 0xF0, 0x40 ] ]
	 ],

	 [ // KEY_POWER_CALC
	   [ [ 0xE0, 0x21 ], [ 0xE0, 0xA1 ] ],
	   [ [ 0xE0, 0x2B ], [ 0xE0, 0xF0, 0x2B ] ],
	   [ [ 0x99 ], [ 0xF0, 0x99 ] ]
	 ],

	 [ // KEY_POWER_SLEEP
	   [ [ 0xE0, 0x5F ], [ 0xE0, 0xDF ] ],
	   [ [ 0xE0, 0x3F ], [ 0xE0, 0xF0, 0x3F ] ],
	   [ [ 0x7F ], [ 0xF0, 0x7F ] ]
	 ],

	 [ // KEY_POWER_POWER
	   [ [ 0xE0, 0x5E ], [ 0xE0, 0xDE ] ],
	   [ [ 0xE0, 0x37 ], [ 0xE0, 0xF0, 0x37 ] ],
	   [ [], [] ]
	 ],

	 [ // KEY_POWER_WAKE
	   [ [ 0xE0, 0x63 ], [ 0xE0, 0xE3 ] ],
	   [ [ 0xE0, 0x5E ], [ 0xE0, 0xF0, 0x5E ] ],
	   [ [], [] ]
	 ],
	 
	];
	
	// Exports
	return Scancode;
});
