'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".dart_tool/chrome-device/Default/Affiliation%20Database": "7e54e74e31a94736c763c986dce896f3",
".dart_tool/chrome-device/Default/Affiliation%20Database-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/AutofillStrikeDatabase/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/AutofillStrikeDatabase/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/AutofillStrikeDatabase/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/BrowsingTopicsSiteData": "5c882d4f0bf1b78d098244a562626eeb",
".dart_tool/chrome-device/Default/BrowsingTopicsSiteData-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/BrowsingTopicsState": "96717220b5669c8b026382acfd31719e",
".dart_tool/chrome-device/Default/BudgetDatabase/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/BudgetDatabase/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/chrome_cart_db/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/chrome_cart_db/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/chrome_cart_db/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/commerce_subscription_db/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/commerce_subscription_db/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/commerce_subscription_db/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/coupon_db/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/coupon_db/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/coupon_db/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/databases/Databases.db": "c2363d7ced189409a5fe9ead85e38980",
".dart_tool/chrome-device/Default/databases/Databases.db-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/DIPS": "c4fc89b057c2b5caa4e1cb12aa2c4cea",
".dart_tool/chrome-device/Default/DIPS-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/discounts_db/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/discounts_db/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/discounts_db/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Download%20Service/EntryDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Download%20Service/EntryDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Extension%20Rules/000003.log": "cc4a8cff19abf3dd35d63cff1503aa5f",
".dart_tool/chrome-device/Default/Extension%20Rules/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/Extension%20Rules/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Extension%20Rules/LOG": "d18b00f543efa33fb894c4bba316891c",
".dart_tool/chrome-device/Default/Extension%20Rules/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Extension%20Scripts/000003.log": "cc4a8cff19abf3dd35d63cff1503aa5f",
".dart_tool/chrome-device/Default/Extension%20Scripts/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/Extension%20Scripts/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Extension%20Scripts/LOG": "8780b6af9396be9038ed54ab8458a812",
".dart_tool/chrome-device/Default/Extension%20Scripts/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Extension%20State/000003.log": "af1d95e1f9eb485393273b25446e1ae5",
".dart_tool/chrome-device/Default/Extension%20State/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/Extension%20State/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Extension%20State/LOG": "61f40c7878701e00fa174dd0ee30cf1e",
".dart_tool/chrome-device/Default/Extension%20State/LOG.old": "6232b99347f744fdc86c00a7d65a4e6d",
".dart_tool/chrome-device/Default/Extension%20State/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Favicons": "bd704a505b6bd2e7ce3ff7b9beae06e7",
".dart_tool/chrome-device/Default/Favicons-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Feature%20Engagement%20Tracker/AvailabilityDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Feature%20Engagement%20Tracker/AvailabilityDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Feature%20Engagement%20Tracker/EventDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Feature%20Engagement%20Tracker/EventDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/GCM%20Store/Encryption/000003.log": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/GCM%20Store/Encryption/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/GCM%20Store/Encryption/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/GCM%20Store/Encryption/LOG": "3baa174f28d232295d08381844bc7d67",
".dart_tool/chrome-device/Default/GCM%20Store/Encryption/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/heavy_ad_intervention_opt_out.db": "66b4df4b40367e4e94bad913ad0b265f",
".dart_tool/chrome-device/Default/heavy_ad_intervention_opt_out.db-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/History": "6ff2390c8a4165c61a71a29c1fa97d7e",
".dart_tool/chrome-device/Default/History-journal": "43c46478f30d76d4d6667aef468865c7",
".dart_tool/chrome-device/Default/Local%20Storage/leveldb/000003.log": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Local%20Storage/leveldb/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/Local%20Storage/leveldb/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Local%20Storage/leveldb/LOG": "8ab4468e18f3deb924b025c27fadecfc",
".dart_tool/chrome-device/Default/Local%20Storage/leveldb/LOG.old": "71e09ea970f477e441827af7d8da0044",
".dart_tool/chrome-device/Default/Local%20Storage/leveldb/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Login%20Data": "6edcee50c30f90c2cf65eb05be6efbf8",
".dart_tool/chrome-device/Default/Login%20Data%20For%20Account": "6edcee50c30f90c2cf65eb05be6efbf8",
".dart_tool/chrome-device/Default/Login%20Data%20For%20Account-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Login%20Data-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Network/Cookies": "7ca81aa4955c8b3febef8f21fceaa3dd",
".dart_tool/chrome-device/Default/Network/Cookies-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Network/Network%20Persistent%20State": "6390bccdcc9eeb89790fd5e6d03d53a1",
".dart_tool/chrome-device/Default/Network/NetworkDataMigrated": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Network/Reporting%20and%20NEL": "bb5724e9cec6f7f111fe9a74fe4a0dce",
".dart_tool/chrome-device/Default/Network/Reporting%20and%20NEL-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Network/TransportSecurity": "d3fa3e1629494cd747a85f6207e049a9",
".dart_tool/chrome-device/Default/Network/Trust%20Tokens": "207ed4cf17c7ed121924c7b881996f02",
".dart_tool/chrome-device/Default/Network/Trust%20Tokens-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Network%20Action%20Predictor": "fdc82e169b48497eb16a4f9f379493e1",
".dart_tool/chrome-device/Default/Network%20Action%20Predictor-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/optimization_guide_hint_cache_store/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/optimization_guide_hint_cache_store/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/optimization_guide_hint_cache_store/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/parcel_tracking_db/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/parcel_tracking_db/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/parcel_tracking_db/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/PersistentOriginTrials/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/PersistentOriginTrials/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/PersistentOriginTrials/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Preferences": "6d5c3f914991cd0a0ed89fb9ef765df4",
".dart_tool/chrome-device/Default/PreferredApps": "2b432fef211c69c745aca86de4f8e4ab",
".dart_tool/chrome-device/Default/README": "883d62acd72005f3ad7a14500d482033",
".dart_tool/chrome-device/Default/Safe%20Browsing%20Network/NetworkDataMigrated": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Safe%20Browsing%20Network/Safe%20Browsing%20Cookies": "7ca81aa4955c8b3febef8f21fceaa3dd",
".dart_tool/chrome-device/Default/Safe%20Browsing%20Network/Safe%20Browsing%20Cookies-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Secure%20Preferences": "527aa22db82c54cb3afc2a5a4f960b42",
".dart_tool/chrome-device/Default/Segmentation%20Platform/SegmentInfoDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Segmentation%20Platform/SegmentInfoDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Segmentation%20Platform/SegmentInfoDB/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Segmentation%20Platform/SignalDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Segmentation%20Platform/SignalDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Segmentation%20Platform/SignalDB/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Segmentation%20Platform/SignalStorageConfigDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Segmentation%20Platform/SignalStorageConfigDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Segmentation%20Platform/SignalStorageConfigDB/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Service%20Worker/Database/000003.log": "fc126d6b19f4e5c6a5658007f2c8b95f",
".dart_tool/chrome-device/Default/Service%20Worker/Database/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/Service%20Worker/Database/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Service%20Worker/Database/LOG": "27b587ddfd9167dec6e665ef2b5c7450",
".dart_tool/chrome-device/Default/Service%20Worker/Database/LOG.old": "8b35ef4b662d2f34a604db54b4755d5c",
".dart_tool/chrome-device/Default/Service%20Worker/Database/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Service%20Worker/ScriptCache/2cc80dabc69f58b6_0": "b31dada557f925258d9bf3d5817940b9",
".dart_tool/chrome-device/Default/Service%20Worker/ScriptCache/4cb013792b196a35_0": "29ba4dab169f5a071c29e563dd6c5a97",
".dart_tool/chrome-device/Default/Service%20Worker/ScriptCache/index": "54cb446f628b2ea4a5bce5769910512e",
".dart_tool/chrome-device/Default/Service%20Worker/ScriptCache/index-dir/the-real-index": "cd61341764574ada88ec6fc04acc2972",
".dart_tool/chrome-device/Default/Session%20Storage/000003.log": "4f6fbf910cdf93d7746b95e31c3b162d",
".dart_tool/chrome-device/Default/Session%20Storage/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/Session%20Storage/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Session%20Storage/LOG": "765a5537cee647f42047a2357c6158a5",
".dart_tool/chrome-device/Default/Session%20Storage/LOG.old": "2adbf796432a66d71d4eed44a737d638",
".dart_tool/chrome-device/Default/Session%20Storage/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Sessions/Session_13358707720462465": "dfe7ad9941d17fcf20ecc95094aafcca",
".dart_tool/chrome-device/Default/Sessions/Session_13358707860802059": "de04ba5e4742e67fcbd5bf7e6d0ab0b0",
".dart_tool/chrome-device/Default/Shared%20Dictionary/cache/index": "54cb446f628b2ea4a5bce5769910512e",
".dart_tool/chrome-device/Default/Shared%20Dictionary/cache/index-dir/the-real-index": "a62f2955ed6d1ccdc21463a71c359e99",
".dart_tool/chrome-device/Default/Shared%20Dictionary/db": "2ca93b9b4af8d2ce579d69ff7499315d",
".dart_tool/chrome-device/Default/Shared%20Dictionary/db-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/SharedStorage": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/shared_proto_db/000003.log": "0f9b1a17b128357a0271f84376bc434f",
".dart_tool/chrome-device/Default/shared_proto_db/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/shared_proto_db/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/shared_proto_db/LOG": "4665b8da1a24ed66369599f79faddb0f",
".dart_tool/chrome-device/Default/shared_proto_db/LOG.old": "11e55f9d247de1bac12a29b001344730",
".dart_tool/chrome-device/Default/shared_proto_db/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/shared_proto_db/metadata/000003.log": "1d18535507f803ec0e45c6bc475d8f31",
".dart_tool/chrome-device/Default/shared_proto_db/metadata/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/shared_proto_db/metadata/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/shared_proto_db/metadata/LOG": "afd2b35990f82d03759969864fca9426",
".dart_tool/chrome-device/Default/shared_proto_db/metadata/LOG.old": "1c131c3ac03925c3ce5fd26361a30e4d",
".dart_tool/chrome-device/Default/shared_proto_db/metadata/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Shortcuts": "1ea55a874b8ee08a668ff060e11da3c2",
".dart_tool/chrome-device/Default/Shortcuts-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Site%20Characteristics%20Database/000003.log": "fe97a631da0b3abe282679af56506f3c",
".dart_tool/chrome-device/Default/Site%20Characteristics%20Database/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/Site%20Characteristics%20Database/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Site%20Characteristics%20Database/LOG": "470978f815b38579caa5abb8b3fddb27",
".dart_tool/chrome-device/Default/Site%20Characteristics%20Database/LOG.old": "7af8058c2275f9ebeaa4efbd5ce478af",
".dart_tool/chrome-device/Default/Site%20Characteristics%20Database/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Sync%20Data/LevelDB/000003.log": "90881c9c26f29fca29815a08ba858544",
".dart_tool/chrome-device/Default/Sync%20Data/LevelDB/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/Sync%20Data/LevelDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Sync%20Data/LevelDB/LOG": "e05e5cc68aab1e92224035c514ef6bef",
".dart_tool/chrome-device/Default/Sync%20Data/LevelDB/LOG.old": "da9a412382917ec57ef84557194bc892",
".dart_tool/chrome-device/Default/Sync%20Data/LevelDB/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Top%20Sites": "ee92dc381332124ac572fd31cd9f3b3d",
".dart_tool/chrome-device/Default/Top%20Sites-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/trusted_vault.pb": "3433ccf3e03fc35b634cd0627833b0ad",
".dart_tool/chrome-device/Default/Visited%20Links": "57ecbde348d32eb13ab833ab04f6d043",
".dart_tool/chrome-device/Default/Web%20Data": "d2a8e8810fe0f8f911334a6bd6ac567d",
".dart_tool/chrome-device/Default/Web%20Data-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/WebStorage/QuotaManager": "c4d1db2c994e1fc48b96d9a5cbb0289d",
".dart_tool/chrome-device/Default/WebStorage/QuotaManager-journal": "6922989de728bb73bc157abb9d9fc866",
".dart_tool/dartpad/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/package_config.json": "307203a6717a977f0d97831b95069704",
".dart_tool/package_config_subset": "190c033f2d21b4eefe600a86c88a7a00",
".dart_tool/version": "b002ad244dc81a034daeea6fd246da39",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "58c0cb540b1b9c0093eb7416d4bb729a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9116880c8a752b899574f8b36ca4b427",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b1fe562240a18a01b61446cb64eb546f",
".git/logs/refs/heads/main": "d33ea5b3cc7add25e8f6e20b5ecfbb5e",
".git/logs/refs/remotes/origin/main": "100054bad29a1038285466c0b85542b1",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/94e8e4587deb3f3feaf1b517f66a94d111c147": "e7eb38a9055499a978fdf7cb027c0179",
".git/objects/09/b6af9d756e7ccab8afe9d26646100cd2bd4122": "117996bd01ac1af118fbab7026e92b17",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/e60b5952950e245da83b4dcb2386af4584cc65": "80f0fa6c17ba295cce76d67582719cc5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/110f9b2b7ec629c82b40fe3fbceb15b5083e78": "a7150166dbe414235fb61509604d4205",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/3a/a5253eb4a9978b5b74cee6706db6ba01b01d60": "db6d7f3899eaf7779675efc95372ee6b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c94e5d5c79e349e0e1275af7bbba813ef75027": "a02fd7275588d67502ce7cfcd4455ffd",
".git/objects/46/fdb62816a32df40eafac22dfe232c8dcc05102": "e43de82fed6562f8c74793f8ae49d41f",
".git/objects/48/182a315bc77d161bde29bca4efb8e6e25b36f1": "32ddcee060f3d85718020f63205dbef4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/51/4288b50d0ade62e510d0054feb8d36e91b39e7": "e7ca01df35aebf7fb324e3d46f82e17a",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/64/889e3aef2cde6875c8d5afd014e98c96fc956f": "f4383e64aeaf1245b2d03b7d3166e561",
".git/objects/68/5b7c356a63e55195f6c4acdecb0e4f23383608": "d87543765b0f48bddeee41680bef024f",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/8e52a55ca73b30a64e0b101128c4c31804c918": "68fb925d778891869be74b92450e6aed",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/83/8defc049018fd8220ce77d3e7852510e820811": "019c4388fc89f25583fab176bef17475",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/4334a97696289b8d673f8f3361d03d07ff859b": "2fc96ec5061cbe8cae81dfff14de74c6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/b0a22d181d52d157298cb8bfa8d4b235020d15": "eb0832486c7b57888680eab1a9bc21ae",
".git/objects/93/35d14b42e920b08bd156bfc9a24f002c8cb262": "2e010e769c827b1570b67eba2b4d2a87",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/a0/c321aeb1b13562599a390fb0380d9a0d2717c2": "bc25e08bceb8132995780cc4ab0f609f",
".git/objects/a6/8ed0f3f01f116b416bd93bf65ab36800df7653": "5ffb6cd621b56e1868eeeac9e8972630",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b4/8bf7d95d6b5ca55a1bd54632636d6f051eb495": "5a7de69a6eae400be7a3b4f94525a6ab",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/e657a5e8e5ab546ad24120857139891f96058f": "9354160afd5412360f819bb34fcb05bf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/bf1172f1eb0bb981354289834d0f6c9b7d2987": "e03f51b54426414e28e1aaf2520e6994",
".git/objects/be/92a62198edcad9311c976d130ccc79dc8efe85": "82f50e9ebba1aea5e5b03a8a3877c562",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/7d77ff105e9801553e71cf55fabe4c559d3153": "7ff600fab769f40d5576cd07e98515b0",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/747b3017801accc63c35263aecea145eb4c8f4": "89c32122af9b7affaada7523a2d991b0",
".git/objects/ce/5d24d5e94830b8ae4972da12ad61d7303d15f1": "1004c9a7e00312a50dc8567fb406e030",
".git/objects/ce/921515c0e92d28b67b53f9d589d5577f31455a": "dfd2910bfbd3dc995c071acdb4e06abc",
".git/objects/ce/b6378f79b78f53d8f740574abb39179fd658e5": "62b68d72ac76cee83e3d817cdb96aebb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e1/b8373a7252057b3425aa56eff50cdab04bc764": "40bed45a07fe713825b00f0c9d45fc56",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/cf49ab48785c6b7e233da0dab04257b9313ef5": "5824382d445ce086eb9d4deebe33ddd7",
".git/refs/heads/main": "9b8d04ab79d2d69806fb002ef2fb7856",
".git/refs/remotes/origin/main": "9b8d04ab79d2d69806fb002ef2fb7856",
".idea/libraries/Dart_SDK.xml": "38b796aae00ebd1d470ecce2bb183a61",
".idea/libraries/KotlinJavaRuntime.xml": "de38cfadca3106f8aff5ab15dd81692f",
".idea/modules.xml": "3867275a5e85f3eb0ad5db7870554b38",
".idea/runConfigurations/main_dart.xml": "0ecf958af289efc3fc1927aa27a8442f",
".idea/workspace.xml": "25155dfb2368a7e35e1ebbecd505a418",
"analysis_options.yaml": "9e65f4b9beebb674c0dc252f70a5c177",
"android/app/build.gradle": "05300cbd4634956121b84b07b5ecf9d2",
"android/app/src/debug/AndroidManifest.xml": "820c45a25b424dd5b7388330f7548d1f",
"android/app/src/main/AndroidManifest.xml": "ebf3c2d5fe35f65df42fb379d3226afd",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "5b3b418ce50367c33bded3c0df06d47f",
"android/app/src/main/kotlin/com/example/web/MainActivity.kt": "241b3ca1811f3a1b84c36180a865ea3c",
"android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/values/styles.xml": "f8b8cfbf977690d117f4dade5d27a789",
"android/app/src/main/res/values-night/styles.xml": "c22fb29c307f2a6ae4317b3a5e577688",
"android/app/src/profile/AndroidManifest.xml": "820c45a25b424dd5b7388330f7548d1f",
"android/build.gradle": "ac55d554f6e295399b94a35dcf3ae81c",
"android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"android/gradle/wrapper/gradle-wrapper.properties": "faaad5d933fa8add22bd78f711c25218",
"android/gradle.properties": "25ea75fb6eca6e1362de4085a52623c0",
"android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"android/local.properties": "b6e1360fa508212050a36fe9f2e16b4a",
"android/settings.gradle": "682a4c750046ddfc37d6aa69e226a88b",
"android/web_android.iml": "273d851cbe25579b8e6ee48886fa4d6a",
"assets/AssetManifest.bin": "6a2fa3fd4ab55d30f3a2c58d2996f8c8",
"assets/AssetManifest.bin.json": "9d6ccb055e3e98665d77acd7f9448443",
"assets/AssetManifest.json": "6debdd5fd9180821e9448a4b7e2f2ce8",
"assets/assets/images/1024.png": "73c5327f538fd17337d4ce478b5e1ed9",
"assets/assets/images/logo.png": "193c4480228d7ea1440a327ecb5cfbd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "84126532094c0b50bf83fc1b3be9a5ff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"build/1babe462858ad4cdd2e8826bebee3040/gen_dart_plugin_registrant.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"build/1babe462858ad4cdd2e8826bebee3040/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"build/1babe462858ad4cdd2e8826bebee3040/_composite.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"build/2794971a5855e7decd7bb368de5d49d1.cache.dill.track.dill": "604240c5fbb651add06d14cbb65c746d",
"build/flutter_assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"build/flutter_assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"build/flutter_assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"build/flutter_assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"build/flutter_assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"build/flutter_assets/NOTICES": "0a8d05c8b1869580511ed2082285c3f6",
"build/flutter_assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"build/flutter_assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1d9370b603afb4d47f16c0f954ae233a",
"/": "1d9370b603afb4d47f16c0f954ae233a",
"ios/Flutter/AppFrameworkInfo.plist": "09ece6f06f706864eb9c343ad93b57c8",
"ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Flutter/flutter_export_environment.sh": "c7720d3f1a5b143514ea4d469850591a",
"ios/Flutter/Generated.xcconfig": "12983b46e91f195f09f1edf3544847ac",
"ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Runner/AppDelegate.swift": "b431e1eaead2cfc3718b75ba2c5f45aa",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"ios/Runner/GeneratedPluginRegistrant.m": "f6079b630997f8fd4ae1ac639162419a",
"ios/Runner/Info.plist": "89fe97591c65fb6906af8ac5653fb487",
"ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"ios/Runner.xcodeproj/project.pbxproj": "6a51430d37beb2168d1880ad0a14ee40",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "1eb71d2100e7a36f63a33aa15dbfe6f1",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/RunnerTests/RunnerTests.swift": "24e5d095048eb86c30423f4e04b6e57b",
"lib/main.dart": "d8621d84413b0f1b1eeb5df51af935a1",
"linux/CMakeLists.txt": "950285b6053c6cbd99ce35764e23e71e",
"linux/flutter/CMakeLists.txt": "2195470ce31675d31db5a37590d011f6",
"linux/flutter/generated_plugins.cmake": "e973b0a9c4bf1b7cba923da57b4fbf45",
"linux/flutter/generated_plugin_registrant.cc": "d07afe003d5837167bdd357d593f20a0",
"linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"linux/main.cc": "539395bcd63dba20afed0838d136189f",
"linux/my_application.cc": "19ab4ea910ecba7eb391d2f79ed94643",
"linux/my_application.h": "f6b37d58752c8671078b6f660e33e8c1",
"macos/Flutter/ephemeral/Flutter-Generated.xcconfig": "ce26404ee516408b8b7d337f55bfa1f0",
"macos/Flutter/ephemeral/flutter_export_environment.sh": "07eecaf45adcf405c617d95da1c086e6",
"macos/Flutter/Flutter-Debug.xcconfig": "f6991d7432e1664af118cc9531127016",
"macos/Flutter/Flutter-Release.xcconfig": "f6991d7432e1664af118cc9531127016",
"macos/Flutter/GeneratedPluginRegistrant.swift": "c840bc53b61279c2fb631741134c2ed7",
"macos/Runner/AppDelegate.swift": "f35757566ef1832592cec47b89197f94",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "c9becc9105f8cabce934d20c7bfb6aac",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "3ded30823804caaa5ccc944067c54a36",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "8bf511604bc6ed0a6aeb380c5113fdcf",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "dfe2c93d1536ae02f085cc63faa3430e",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8e0ae58e362a6636bdfccbc04da2c58c",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "0ad44039155424738917502c69667699",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "04e7b6ef05346c70b663ca1d97de3ad5",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "1d48e925145d4b573a3b5d7960a1c585",
"macos/Runner/Base.lproj/MainMenu.xib": "85bdf02ea39336686f2e0ff5f52137cc",
"macos/Runner/Configs/AppInfo.xcconfig": "ebe99d791079541f297df5b876ad737a",
"macos/Runner/Configs/Debug.xcconfig": "783e2b0e2aa72d8bc215462bb8d1569d",
"macos/Runner/Configs/Release.xcconfig": "709485d8ea7b78479bf23eb64281287d",
"macos/Runner/Configs/Warnings.xcconfig": "bbde97fb62099b5b9879fb2ffeb1a0a0",
"macos/Runner/DebugProfile.entitlements": "4ad77e84621dc5735c16180a0934fcde",
"macos/Runner/Info.plist": "9ffcbec0a18fdad9d3d606656fd46f9a",
"macos/Runner/MainFlutterWindow.swift": "93c22dae2d93f3dc1402e121901f582b",
"macos/Runner/Release.entitlements": "fc4ad575c1efec3d097fb9d40a0f702f",
"macos/Runner.xcodeproj/project.pbxproj": "53b1329769afd4856d6873793d970a71",
"macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "f1898ad02510b9ebd2823f73fbb7e67c",
"macos/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"macos/RunnerTests/RunnerTests.swift": "491b4028786d09d80b109a6d3d775ef6",
"main.dart.js": "812705f937a41cd20cd76dc1074c299c",
"manifest.json": "22d0d89c0db3f81cfe88174d182007b8",
"pubspec.lock": "3c56bb47a8cefdb93f41037173ea09ab",
"pubspec.yaml": "dec7ad96f0c487e1c4cec01f49795405",
"README.md": "f62eeaa7616cee091b7df40146427806",
"test/widget_test.dart": "32cade57813a89c74d8d3a269232f36e",
"version.json": "94cbff333fe11a6f128fede33911aade",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "f5a0ff31998b238c862fefb0cafc7010",
"web/manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"web.iml": "f9bf5c490675c84d098e6772a6f2a796",
"windows/CMakeLists.txt": "1ab2c7fa4021ddd68d915bb0085dd341",
"windows/flutter/CMakeLists.txt": "bbf66fed5180bd9ae8198b8d7c4a0001",
"windows/flutter/generated_plugins.cmake": "620906318e8c8297f3bc95b445ce4c47",
"windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
"windows/runner/CMakeLists.txt": "028602ab9754bffe716659ada7590d29",
"windows/runner/flutter_window.cpp": "2f463f9b7da67a2d692a012f9ea85e0c",
"windows/runner/flutter_window.h": "7defcc89d4a26d56e801241d624d48fb",
"windows/runner/main.cpp": "01bb7d9acfab1af72f17ad947706bf4f",
"windows/runner/resource.h": "1ade5dd15e613479a15e8832ed276f2b",
"windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"windows/runner/runner.exe.manifest": "cd3aafe81b2f278dffaf305373ee30b4",
"windows/runner/Runner.rc": "3bbf60f37dde0fe558c0735ced6ed85e",
"windows/runner/utils.cpp": "3d7ba99ef466af433ffd4ef72b7c5c35",
"windows/runner/utils.h": "fd81e143f5614eb6fd75efe539002853",
"windows/runner/win32_window.cpp": "571eb8234dbc2661be03aa5f2a4d2fca",
"windows/runner/win32_window.h": "7569387d58711ab975940f4df3b4bcda"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
