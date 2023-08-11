/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export var AvatarRatingEnum;
(function (AvatarRatingEnum) {
    /** Indicates a G level avatar rating level. */
    AvatarRatingEnum["G"] = "G";
    /** Indicates a PG level avatar rating level. */
    AvatarRatingEnum["Pg"] = "PG";
    /** Indicates an R level avatar rating level. */
    AvatarRatingEnum["R"] = "R";
    /** Indicates an X level avatar rating level. */
    AvatarRatingEnum["X"] = "X";
})(AvatarRatingEnum || (AvatarRatingEnum = {}));
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export var BlogIdType;
(function (BlogIdType) {
    /** Identify a resource by the Database ID. */
    BlogIdType["DatabaseId"] = "DATABASE_ID";
    /** Identify a resource by the (hashed) Global ID. */
    BlogIdType["Id"] = "ID";
    /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
    BlogIdType["Slug"] = "SLUG";
    /** Identify a resource by the URI. */
    BlogIdType["Uri"] = "URI";
})(BlogIdType || (BlogIdType = {}));
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export var CategoryIdType;
(function (CategoryIdType) {
    /** The Database ID for the node */
    CategoryIdType["DatabaseId"] = "DATABASE_ID";
    /** The hashed Global ID */
    CategoryIdType["Id"] = "ID";
    /** The name of the node */
    CategoryIdType["Name"] = "NAME";
    /** Url friendly name of the node */
    CategoryIdType["Slug"] = "SLUG";
    /** The URI for the node */
    CategoryIdType["Uri"] = "URI";
})(CategoryIdType || (CategoryIdType = {}));
/** The Type of Identifier used to fetch a single comment node. Default is "ID". To be used along with the "id" field. */
export var CommentNodeIdTypeEnum;
(function (CommentNodeIdTypeEnum) {
    /** Identify a resource by the Database ID. */
    CommentNodeIdTypeEnum["DatabaseId"] = "DATABASE_ID";
    /** Identify a resource by the (hashed) Global ID. */
    CommentNodeIdTypeEnum["Id"] = "ID";
})(CommentNodeIdTypeEnum || (CommentNodeIdTypeEnum = {}));
/** The status of the comment object. */
export var CommentStatusEnum;
(function (CommentStatusEnum) {
    /** Comments with the Одобрен status */
    CommentStatusEnum["Approve"] = "APPROVE";
    /** Comments with the Не одобрен status */
    CommentStatusEnum["Hold"] = "HOLD";
    /** Comments with the Спам status */
    CommentStatusEnum["Spam"] = "SPAM";
    /** Comments with the Удалён status */
    CommentStatusEnum["Trash"] = "TRASH";
})(CommentStatusEnum || (CommentStatusEnum = {}));
/** Options for ordering the connection */
export var CommentsConnectionOrderbyEnum;
(function (CommentsConnectionOrderbyEnum) {
    /** Order by browser user agent of the commenter. */
    CommentsConnectionOrderbyEnum["CommentAgent"] = "COMMENT_AGENT";
    /** Order by approval status of the comment. */
    CommentsConnectionOrderbyEnum["CommentApproved"] = "COMMENT_APPROVED";
    /** Order by name of the comment author. */
    CommentsConnectionOrderbyEnum["CommentAuthor"] = "COMMENT_AUTHOR";
    /** Order by e-mail of the comment author. */
    CommentsConnectionOrderbyEnum["CommentAuthorEmail"] = "COMMENT_AUTHOR_EMAIL";
    /** Order by IP address of the comment author. */
    CommentsConnectionOrderbyEnum["CommentAuthorIp"] = "COMMENT_AUTHOR_IP";
    /** Order by URL address of the comment author. */
    CommentsConnectionOrderbyEnum["CommentAuthorUrl"] = "COMMENT_AUTHOR_URL";
    /** Order by the comment contents. */
    CommentsConnectionOrderbyEnum["CommentContent"] = "COMMENT_CONTENT";
    /** Order by date/time timestamp of the comment. */
    CommentsConnectionOrderbyEnum["CommentDate"] = "COMMENT_DATE";
    /** Order by GMT timezone date/time timestamp of the comment. */
    CommentsConnectionOrderbyEnum["CommentDateGmt"] = "COMMENT_DATE_GMT";
    /** Order by the globally unique identifier for the comment object */
    CommentsConnectionOrderbyEnum["CommentId"] = "COMMENT_ID";
    /** Order by the array list of comment IDs listed in the where clause. */
    CommentsConnectionOrderbyEnum["CommentIn"] = "COMMENT_IN";
    /** Order by the comment karma score. */
    CommentsConnectionOrderbyEnum["CommentKarma"] = "COMMENT_KARMA";
    /** Order by the comment parent ID. */
    CommentsConnectionOrderbyEnum["CommentParent"] = "COMMENT_PARENT";
    /** Order by the post object ID. */
    CommentsConnectionOrderbyEnum["CommentPostId"] = "COMMENT_POST_ID";
    /** Order by the the type of comment, such as 'comment', 'pingback', or 'trackback'. */
    CommentsConnectionOrderbyEnum["CommentType"] = "COMMENT_TYPE";
    /** Order by the user ID. */
    CommentsConnectionOrderbyEnum["UserId"] = "USER_ID";
})(CommentsConnectionOrderbyEnum || (CommentsConnectionOrderbyEnum = {}));
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export var CommonSectionIdType;
(function (CommonSectionIdType) {
    /** Identify a resource by the Database ID. */
    CommonSectionIdType["DatabaseId"] = "DATABASE_ID";
    /** Identify a resource by the (hashed) Global ID. */
    CommonSectionIdType["Id"] = "ID";
    /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
    CommonSectionIdType["Slug"] = "SLUG";
    /** Identify a resource by the URI. */
    CommonSectionIdType["Uri"] = "URI";
})(CommonSectionIdType || (CommonSectionIdType = {}));
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export var ContentNodeIdTypeEnum;
(function (ContentNodeIdTypeEnum) {
    /** Identify a resource by the Database ID. */
    ContentNodeIdTypeEnum["DatabaseId"] = "DATABASE_ID";
    /** Identify a resource by the (hashed) Global ID. */
    ContentNodeIdTypeEnum["Id"] = "ID";
    /** Identify a resource by the URI. */
    ContentNodeIdTypeEnum["Uri"] = "URI";
})(ContentNodeIdTypeEnum || (ContentNodeIdTypeEnum = {}));
/** Allowed Content Types */
export var ContentTypeEnum;
(function (ContentTypeEnum) {
    /** The Type of Content object */
    ContentTypeEnum["Attachment"] = "ATTACHMENT";
    /** The Type of Content object */
    ContentTypeEnum["Blog"] = "BLOG";
    /** The Type of Content object */
    ContentTypeEnum["CommonSection"] = "COMMON_SECTION";
    /** The Type of Content object */
    ContentTypeEnum["Page"] = "PAGE";
    /** The Type of Content object */
    ContentTypeEnum["Post"] = "POST";
    /** The Type of Content object */
    ContentTypeEnum["Publications"] = "PUBLICATIONS";
    /** The Type of Content object */
    ContentTypeEnum["Training"] = "TRAINING";
})(ContentTypeEnum || (ContentTypeEnum = {}));
/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
export var ContentTypeIdTypeEnum;
(function (ContentTypeIdTypeEnum) {
    /** The globally unique ID */
    ContentTypeIdTypeEnum["Id"] = "ID";
    /** The name of the content type. */
    ContentTypeIdTypeEnum["Name"] = "NAME";
})(ContentTypeIdTypeEnum || (ContentTypeIdTypeEnum = {}));
/** Allowed Content Types of the Category taxonomy. */
export var ContentTypesOfCategoryEnum;
(function (ContentTypesOfCategoryEnum) {
    /** The Type of Content object */
    ContentTypesOfCategoryEnum["Post"] = "POST";
})(ContentTypesOfCategoryEnum || (ContentTypesOfCategoryEnum = {}));
/** Allowed Content Types of the PostFormat taxonomy. */
export var ContentTypesOfPostFormatEnum;
(function (ContentTypesOfPostFormatEnum) {
    /** The Type of Content object */
    ContentTypesOfPostFormatEnum["Post"] = "POST";
})(ContentTypesOfPostFormatEnum || (ContentTypesOfPostFormatEnum = {}));
/** Allowed Content Types of the Tag taxonomy. */
export var ContentTypesOfTagEnum;
(function (ContentTypesOfTagEnum) {
    /** The Type of Content object */
    ContentTypesOfTagEnum["Post"] = "POST";
})(ContentTypesOfTagEnum || (ContentTypesOfTagEnum = {}));
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export var MediaItemIdType;
(function (MediaItemIdType) {
    /** Identify a resource by the Database ID. */
    MediaItemIdType["DatabaseId"] = "DATABASE_ID";
    /** Identify a resource by the (hashed) Global ID. */
    MediaItemIdType["Id"] = "ID";
    /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
    MediaItemIdType["Slug"] = "SLUG";
    /** Identify a media item by its source url */
    MediaItemIdType["SourceUrl"] = "SOURCE_URL";
    /** Identify a resource by the URI. */
    MediaItemIdType["Uri"] = "URI";
})(MediaItemIdType || (MediaItemIdType = {}));
/** The size of the media item object. */
export var MediaItemSizeEnum;
(function (MediaItemSizeEnum) {
    /** MediaItem with the large size */
    MediaItemSizeEnum["Large"] = "LARGE";
    /** MediaItem with the medium size */
    MediaItemSizeEnum["Medium"] = "MEDIUM";
    /** MediaItem with the medium_large size */
    MediaItemSizeEnum["MediumLarge"] = "MEDIUM_LARGE";
    /** MediaItem with the post-thumbnail size */
    MediaItemSizeEnum["PostThumbnail"] = "POST_THUMBNAIL";
    /** MediaItem with the thumbnail size */
    MediaItemSizeEnum["Thumbnail"] = "THUMBNAIL";
    /** MediaItem with the 1536x1536 size */
    MediaItemSizeEnum["1536X1536"] = "_1536X1536";
    /** MediaItem with the 2048x2048 size */
    MediaItemSizeEnum["2048X2048"] = "_2048X2048";
})(MediaItemSizeEnum || (MediaItemSizeEnum = {}));
/** The status of the media item object. */
export var MediaItemStatusEnum;
(function (MediaItemStatusEnum) {
    /** Objects with the auto-draft status */
    MediaItemStatusEnum["AutoDraft"] = "AUTO_DRAFT";
    /** Objects with the inherit status */
    MediaItemStatusEnum["Inherit"] = "INHERIT";
    /** Objects with the private status */
    MediaItemStatusEnum["Private"] = "PRIVATE";
    /** Objects with the trash status */
    MediaItemStatusEnum["Trash"] = "TRASH";
})(MediaItemStatusEnum || (MediaItemStatusEnum = {}));
/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export var MenuItemNodeIdTypeEnum;
(function (MenuItemNodeIdTypeEnum) {
    /** Identify a resource by the Database ID. */
    MenuItemNodeIdTypeEnum["DatabaseId"] = "DATABASE_ID";
    /** Identify a resource by the (hashed) Global ID. */
    MenuItemNodeIdTypeEnum["Id"] = "ID";
})(MenuItemNodeIdTypeEnum || (MenuItemNodeIdTypeEnum = {}));
/** Registered menu locations */
export var MenuLocationEnum;
(function (MenuLocationEnum) {
    /** Put the menu in the footer location */
    MenuLocationEnum["Footer"] = "FOOTER";
    /** Put the menu in the primary location */
    MenuLocationEnum["Primary"] = "PRIMARY";
})(MenuLocationEnum || (MenuLocationEnum = {}));
/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export var MenuNodeIdTypeEnum;
(function (MenuNodeIdTypeEnum) {
    /** Identify a menu node by the Database ID. */
    MenuNodeIdTypeEnum["DatabaseId"] = "DATABASE_ID";
    /** Identify a menu node by the (hashed) Global ID. */
    MenuNodeIdTypeEnum["Id"] = "ID";
    /** Identify a menu node by the slug of menu location to which it is assigned */
    MenuNodeIdTypeEnum["Location"] = "LOCATION";
    /** Identify a menu node by its name */
    MenuNodeIdTypeEnum["Name"] = "NAME";
    /** Identify a menu node by its slug */
    MenuNodeIdTypeEnum["Slug"] = "SLUG";
})(MenuNodeIdTypeEnum || (MenuNodeIdTypeEnum = {}));
/** The MimeType of the object */
export var MimeTypeEnum;
(function (MimeTypeEnum) {
    /** MimeType application/java */
    MimeTypeEnum["ApplicationJava"] = "APPLICATION_JAVA";
    /** MimeType application/msword */
    MimeTypeEnum["ApplicationMsword"] = "APPLICATION_MSWORD";
    /** MimeType application/octet-stream */
    MimeTypeEnum["ApplicationOctetStream"] = "APPLICATION_OCTET_STREAM";
    /** MimeType application/onenote */
    MimeTypeEnum["ApplicationOnenote"] = "APPLICATION_ONENOTE";
    /** MimeType application/oxps */
    MimeTypeEnum["ApplicationOxps"] = "APPLICATION_OXPS";
    /** MimeType application/pdf */
    MimeTypeEnum["ApplicationPdf"] = "APPLICATION_PDF";
    /** MimeType application/rar */
    MimeTypeEnum["ApplicationRar"] = "APPLICATION_RAR";
    /** MimeType application/rtf */
    MimeTypeEnum["ApplicationRtf"] = "APPLICATION_RTF";
    /** MimeType application/ttaf+xml */
    MimeTypeEnum["ApplicationTtafXml"] = "APPLICATION_TTAF_XML";
    /** MimeType application/vnd.apple.keynote */
    MimeTypeEnum["ApplicationVndAppleKeynote"] = "APPLICATION_VND_APPLE_KEYNOTE";
    /** MimeType application/vnd.apple.numbers */
    MimeTypeEnum["ApplicationVndAppleNumbers"] = "APPLICATION_VND_APPLE_NUMBERS";
    /** MimeType application/vnd.apple.pages */
    MimeTypeEnum["ApplicationVndApplePages"] = "APPLICATION_VND_APPLE_PAGES";
    /** MimeType application/vnd.ms-access */
    MimeTypeEnum["ApplicationVndMsAccess"] = "APPLICATION_VND_MS_ACCESS";
    /** MimeType application/vnd.ms-excel */
    MimeTypeEnum["ApplicationVndMsExcel"] = "APPLICATION_VND_MS_EXCEL";
    /** MimeType application/vnd.ms-excel.addin.macroEnabled.12 */
    MimeTypeEnum["ApplicationVndMsExcelAddinMacroenabled_12"] = "APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12";
    /** MimeType application/vnd.ms-excel.sheet.binary.macroEnabled.12 */
    MimeTypeEnum["ApplicationVndMsExcelSheetBinaryMacroenabled_12"] = "APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12";
    /** MimeType application/vnd.ms-excel.sheet.macroEnabled.12 */
    MimeTypeEnum["ApplicationVndMsExcelSheetMacroenabled_12"] = "APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12";
    /** MimeType application/vnd.ms-excel.template.macroEnabled.12 */
    MimeTypeEnum["ApplicationVndMsExcelTemplateMacroenabled_12"] = "APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12";
    /** MimeType application/vnd.ms-powerpoint */
    MimeTypeEnum["ApplicationVndMsPowerpoint"] = "APPLICATION_VND_MS_POWERPOINT";
    /** MimeType application/vnd.ms-powerpoint.addin.macroEnabled.12 */
    MimeTypeEnum["ApplicationVndMsPowerpointAddinMacroenabled_12"] = "APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12";
    /** MimeType application/vnd.ms-powerpoint.presentation.macroEnabled.12 */
    MimeTypeEnum["ApplicationVndMsPowerpointPresentationMacroenabled_12"] = "APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12";
    /** MimeType application/vnd.ms-powerpoint.slideshow.macroEnabled.12 */
    MimeTypeEnum["ApplicationVndMsPowerpointSlideshowMacroenabled_12"] = "APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12";
    /** MimeType application/vnd.ms-powerpoint.slide.macroEnabled.12 */
    MimeTypeEnum["ApplicationVndMsPowerpointSlideMacroenabled_12"] = "APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12";
    /** MimeType application/vnd.ms-powerpoint.template.macroEnabled.12 */
    MimeTypeEnum["ApplicationVndMsPowerpointTemplateMacroenabled_12"] = "APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12";
    /** MimeType application/vnd.ms-project */
    MimeTypeEnum["ApplicationVndMsProject"] = "APPLICATION_VND_MS_PROJECT";
    /** MimeType application/vnd.ms-word.document.macroEnabled.12 */
    MimeTypeEnum["ApplicationVndMsWordDocumentMacroenabled_12"] = "APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12";
    /** MimeType application/vnd.ms-word.template.macroEnabled.12 */
    MimeTypeEnum["ApplicationVndMsWordTemplateMacroenabled_12"] = "APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12";
    /** MimeType application/vnd.ms-write */
    MimeTypeEnum["ApplicationVndMsWrite"] = "APPLICATION_VND_MS_WRITE";
    /** MimeType application/vnd.ms-xpsdocument */
    MimeTypeEnum["ApplicationVndMsXpsdocument"] = "APPLICATION_VND_MS_XPSDOCUMENT";
    /** MimeType application/vnd.oasis.opendocument.chart */
    MimeTypeEnum["ApplicationVndOasisOpendocumentChart"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_CHART";
    /** MimeType application/vnd.oasis.opendocument.database */
    MimeTypeEnum["ApplicationVndOasisOpendocumentDatabase"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE";
    /** MimeType application/vnd.oasis.opendocument.formula */
    MimeTypeEnum["ApplicationVndOasisOpendocumentFormula"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA";
    /** MimeType application/vnd.oasis.opendocument.graphics */
    MimeTypeEnum["ApplicationVndOasisOpendocumentGraphics"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS";
    /** MimeType application/vnd.oasis.opendocument.presentation */
    MimeTypeEnum["ApplicationVndOasisOpendocumentPresentation"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION";
    /** MimeType application/vnd.oasis.opendocument.spreadsheet */
    MimeTypeEnum["ApplicationVndOasisOpendocumentSpreadsheet"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET";
    /** MimeType application/vnd.oasis.opendocument.text */
    MimeTypeEnum["ApplicationVndOasisOpendocumentText"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT";
    /** MimeType application/vnd.openxmlformats-officedocument.presentationml.presentation */
    MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION";
    /** MimeType application/vnd.openxmlformats-officedocument.presentationml.slide */
    MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE";
    /** MimeType application/vnd.openxmlformats-officedocument.presentationml.slideshow */
    MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW";
    /** MimeType application/vnd.openxmlformats-officedocument.presentationml.template */
    MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE";
    /** MimeType application/vnd.openxmlformats-officedocument.spreadsheetml.sheet */
    MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET";
    /** MimeType application/vnd.openxmlformats-officedocument.spreadsheetml.template */
    MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE";
    /** MimeType application/vnd.openxmlformats-officedocument.wordprocessingml.document */
    MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT";
    /** MimeType application/vnd.openxmlformats-officedocument.wordprocessingml.template */
    MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE";
    /** MimeType application/wordperfect */
    MimeTypeEnum["ApplicationWordperfect"] = "APPLICATION_WORDPERFECT";
    /** MimeType application/x-7z-compressed */
    MimeTypeEnum["ApplicationX_7ZCompressed"] = "APPLICATION_X_7Z_COMPRESSED";
    /** MimeType application/x-gzip */
    MimeTypeEnum["ApplicationXGzip"] = "APPLICATION_X_GZIP";
    /** MimeType application/x-tar */
    MimeTypeEnum["ApplicationXTar"] = "APPLICATION_X_TAR";
    /** MimeType application/zip */
    MimeTypeEnum["ApplicationZip"] = "APPLICATION_ZIP";
    /** MimeType audio/aac */
    MimeTypeEnum["AudioAac"] = "AUDIO_AAC";
    /** MimeType audio/flac */
    MimeTypeEnum["AudioFlac"] = "AUDIO_FLAC";
    /** MimeType audio/midi */
    MimeTypeEnum["AudioMidi"] = "AUDIO_MIDI";
    /** MimeType audio/mpeg */
    MimeTypeEnum["AudioMpeg"] = "AUDIO_MPEG";
    /** MimeType audio/ogg */
    MimeTypeEnum["AudioOgg"] = "AUDIO_OGG";
    /** MimeType audio/wav */
    MimeTypeEnum["AudioWav"] = "AUDIO_WAV";
    /** MimeType audio/x-matroska */
    MimeTypeEnum["AudioXMatroska"] = "AUDIO_X_MATROSKA";
    /** MimeType audio/x-ms-wax */
    MimeTypeEnum["AudioXMsWax"] = "AUDIO_X_MS_WAX";
    /** MimeType audio/x-ms-wma */
    MimeTypeEnum["AudioXMsWma"] = "AUDIO_X_MS_WMA";
    /** MimeType audio/x-realaudio */
    MimeTypeEnum["AudioXRealaudio"] = "AUDIO_X_REALAUDIO";
    /** MimeType image/bmp */
    MimeTypeEnum["ImageBmp"] = "IMAGE_BMP";
    /** MimeType image/gif */
    MimeTypeEnum["ImageGif"] = "IMAGE_GIF";
    /** MimeType image/heic */
    MimeTypeEnum["ImageHeic"] = "IMAGE_HEIC";
    /** MimeType image/jpeg */
    MimeTypeEnum["ImageJpeg"] = "IMAGE_JPEG";
    /** MimeType image/png */
    MimeTypeEnum["ImagePng"] = "IMAGE_PNG";
    /** MimeType image/tiff */
    MimeTypeEnum["ImageTiff"] = "IMAGE_TIFF";
    /** MimeType image/webp */
    MimeTypeEnum["ImageWebp"] = "IMAGE_WEBP";
    /** MimeType image/x-icon */
    MimeTypeEnum["ImageXIcon"] = "IMAGE_X_ICON";
    /** MimeType text/calendar */
    MimeTypeEnum["TextCalendar"] = "TEXT_CALENDAR";
    /** MimeType text/css */
    MimeTypeEnum["TextCss"] = "TEXT_CSS";
    /** MimeType text/csv */
    MimeTypeEnum["TextCsv"] = "TEXT_CSV";
    /** MimeType text/plain */
    MimeTypeEnum["TextPlain"] = "TEXT_PLAIN";
    /** MimeType text/richtext */
    MimeTypeEnum["TextRichtext"] = "TEXT_RICHTEXT";
    /** MimeType text/tab-separated-values */
    MimeTypeEnum["TextTabSeparatedValues"] = "TEXT_TAB_SEPARATED_VALUES";
    /** MimeType text/vtt */
    MimeTypeEnum["TextVtt"] = "TEXT_VTT";
    /** MimeType video/3gpp */
    MimeTypeEnum["Video_3Gpp"] = "VIDEO_3GPP";
    /** MimeType video/3gpp2 */
    MimeTypeEnum["Video_3Gpp2"] = "VIDEO_3GPP2";
    /** MimeType video/avi */
    MimeTypeEnum["VideoAvi"] = "VIDEO_AVI";
    /** MimeType video/divx */
    MimeTypeEnum["VideoDivx"] = "VIDEO_DIVX";
    /** MimeType video/mp4 */
    MimeTypeEnum["VideoMp4"] = "VIDEO_MP4";
    /** MimeType video/mpeg */
    MimeTypeEnum["VideoMpeg"] = "VIDEO_MPEG";
    /** MimeType video/ogg */
    MimeTypeEnum["VideoOgg"] = "VIDEO_OGG";
    /** MimeType video/quicktime */
    MimeTypeEnum["VideoQuicktime"] = "VIDEO_QUICKTIME";
    /** MimeType video/webm */
    MimeTypeEnum["VideoWebm"] = "VIDEO_WEBM";
    /** MimeType video/x-flv */
    MimeTypeEnum["VideoXFlv"] = "VIDEO_X_FLV";
    /** MimeType video/x-matroska */
    MimeTypeEnum["VideoXMatroska"] = "VIDEO_X_MATROSKA";
    /** MimeType video/x-ms-asf */
    MimeTypeEnum["VideoXMsAsf"] = "VIDEO_X_MS_ASF";
    /** MimeType video/x-ms-wm */
    MimeTypeEnum["VideoXMsWm"] = "VIDEO_X_MS_WM";
    /** MimeType video/x-ms-wmv */
    MimeTypeEnum["VideoXMsWmv"] = "VIDEO_X_MS_WMV";
    /** MimeType video/x-ms-wmx */
    MimeTypeEnum["VideoXMsWmx"] = "VIDEO_X_MS_WMX";
})(MimeTypeEnum || (MimeTypeEnum = {}));
/** The cardinality of the connection order */
export var OrderEnum;
(function (OrderEnum) {
    /** Sort the query result set in an ascending order */
    OrderEnum["Asc"] = "ASC";
    /** Sort the query result set in a descending order */
    OrderEnum["Desc"] = "DESC";
})(OrderEnum || (OrderEnum = {}));
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export var PageIdType;
(function (PageIdType) {
    /** Identify a resource by the Database ID. */
    PageIdType["DatabaseId"] = "DATABASE_ID";
    /** Identify a resource by the (hashed) Global ID. */
    PageIdType["Id"] = "ID";
    /** Identify a resource by the URI. */
    PageIdType["Uri"] = "URI";
})(PageIdType || (PageIdType = {}));
/** The status of the WordPress plugin. */
export var PluginStatusEnum;
(function (PluginStatusEnum) {
    /** The plugin is currently active. */
    PluginStatusEnum["Active"] = "ACTIVE";
    /** The plugin is a drop-in plugin. */
    PluginStatusEnum["DropIn"] = "DROP_IN";
    /** The plugin is currently inactive. */
    PluginStatusEnum["Inactive"] = "INACTIVE";
    /** The plugin is a must-use plugin. */
    PluginStatusEnum["MustUse"] = "MUST_USE";
    /** The plugin is technically active but was paused while loading. */
    PluginStatusEnum["Paused"] = "PAUSED";
    /** The plugin was active recently. */
    PluginStatusEnum["RecentlyActive"] = "RECENTLY_ACTIVE";
    /** The plugin has an upgrade available. */
    PluginStatusEnum["Upgrade"] = "UPGRADE";
})(PluginStatusEnum || (PluginStatusEnum = {}));
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export var PostFormatIdType;
(function (PostFormatIdType) {
    /** The Database ID for the node */
    PostFormatIdType["DatabaseId"] = "DATABASE_ID";
    /** The hashed Global ID */
    PostFormatIdType["Id"] = "ID";
    /** The name of the node */
    PostFormatIdType["Name"] = "NAME";
    /** Url friendly name of the node */
    PostFormatIdType["Slug"] = "SLUG";
    /** The URI for the node */
    PostFormatIdType["Uri"] = "URI";
})(PostFormatIdType || (PostFormatIdType = {}));
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export var PostIdType;
(function (PostIdType) {
    /** Identify a resource by the Database ID. */
    PostIdType["DatabaseId"] = "DATABASE_ID";
    /** Identify a resource by the (hashed) Global ID. */
    PostIdType["Id"] = "ID";
    /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
    PostIdType["Slug"] = "SLUG";
    /** Identify a resource by the URI. */
    PostIdType["Uri"] = "URI";
})(PostIdType || (PostIdType = {}));
/** The format of post field data. */
export var PostObjectFieldFormatEnum;
(function (PostObjectFieldFormatEnum) {
    /** Provide the field value directly from database. Null on unauthenticated requests. */
    PostObjectFieldFormatEnum["Raw"] = "RAW";
    /** Provide the field value as rendered by WordPress. Default. */
    PostObjectFieldFormatEnum["Rendered"] = "RENDERED";
})(PostObjectFieldFormatEnum || (PostObjectFieldFormatEnum = {}));
/** The column to use when filtering by date */
export var PostObjectsConnectionDateColumnEnum;
(function (PostObjectsConnectionDateColumnEnum) {
    /** The date the comment was created in local time. */
    PostObjectsConnectionDateColumnEnum["Date"] = "DATE";
    /** The most recent modification date of the comment. */
    PostObjectsConnectionDateColumnEnum["Modified"] = "MODIFIED";
})(PostObjectsConnectionDateColumnEnum || (PostObjectsConnectionDateColumnEnum = {}));
/** Field to order the connection by */
export var PostObjectsConnectionOrderbyEnum;
(function (PostObjectsConnectionOrderbyEnum) {
    /** Order by author */
    PostObjectsConnectionOrderbyEnum["Author"] = "AUTHOR";
    /** Order by the number of comments it has acquired */
    PostObjectsConnectionOrderbyEnum["CommentCount"] = "COMMENT_COUNT";
    /** Order by publish date */
    PostObjectsConnectionOrderbyEnum["Date"] = "DATE";
    /** Preserve the ID order given in the IN array */
    PostObjectsConnectionOrderbyEnum["In"] = "IN";
    /** Order by the menu order value */
    PostObjectsConnectionOrderbyEnum["MenuOrder"] = "MENU_ORDER";
    /** Order by last modified date */
    PostObjectsConnectionOrderbyEnum["Modified"] = "MODIFIED";
    /** Preserve slug order given in the NAME_IN array */
    PostObjectsConnectionOrderbyEnum["NameIn"] = "NAME_IN";
    /** Order by parent ID */
    PostObjectsConnectionOrderbyEnum["Parent"] = "PARENT";
    /** Order by slug */
    PostObjectsConnectionOrderbyEnum["Slug"] = "SLUG";
    /** Order by title */
    PostObjectsConnectionOrderbyEnum["Title"] = "TITLE";
})(PostObjectsConnectionOrderbyEnum || (PostObjectsConnectionOrderbyEnum = {}));
/** The status of the object. */
export var PostStatusEnum;
(function (PostStatusEnum) {
    /** Objects with the acf-disabled status */
    PostStatusEnum["AcfDisabled"] = "ACF_DISABLED";
    /** Objects with the auto-draft status */
    PostStatusEnum["AutoDraft"] = "AUTO_DRAFT";
    /** Objects with the draft status */
    PostStatusEnum["Draft"] = "DRAFT";
    /** Objects with the future status */
    PostStatusEnum["Future"] = "FUTURE";
    /** Objects with the inherit status */
    PostStatusEnum["Inherit"] = "INHERIT";
    /** Objects with the pending status */
    PostStatusEnum["Pending"] = "PENDING";
    /** Objects with the private status */
    PostStatusEnum["Private"] = "PRIVATE";
    /** Objects with the publish status */
    PostStatusEnum["Publish"] = "PUBLISH";
    /** Objects with the request-completed status */
    PostStatusEnum["RequestCompleted"] = "REQUEST_COMPLETED";
    /** Objects with the request-confirmed status */
    PostStatusEnum["RequestConfirmed"] = "REQUEST_CONFIRMED";
    /** Objects with the request-failed status */
    PostStatusEnum["RequestFailed"] = "REQUEST_FAILED";
    /** Objects with the request-pending status */
    PostStatusEnum["RequestPending"] = "REQUEST_PENDING";
    /** Objects with the trash status */
    PostStatusEnum["Trash"] = "TRASH";
})(PostStatusEnum || (PostStatusEnum = {}));
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export var PublicationIdType;
(function (PublicationIdType) {
    /** Identify a resource by the Database ID. */
    PublicationIdType["DatabaseId"] = "DATABASE_ID";
    /** Identify a resource by the (hashed) Global ID. */
    PublicationIdType["Id"] = "ID";
    /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
    PublicationIdType["Slug"] = "SLUG";
    /** Identify a resource by the URI. */
    PublicationIdType["Uri"] = "URI";
})(PublicationIdType || (PublicationIdType = {}));
/** The logical relation between each item in the array when there are more than one. */
export var RelationEnum;
(function (RelationEnum) {
    /** The logical AND condition returns true if both operands are true, otherwise, it returns false. */
    RelationEnum["And"] = "AND";
    /** The logical OR condition returns false if both operands are false, otherwise, it returns true. */
    RelationEnum["Or"] = "OR";
})(RelationEnum || (RelationEnum = {}));
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export var TagIdType;
(function (TagIdType) {
    /** The Database ID for the node */
    TagIdType["DatabaseId"] = "DATABASE_ID";
    /** The hashed Global ID */
    TagIdType["Id"] = "ID";
    /** The name of the node */
    TagIdType["Name"] = "NAME";
    /** Url friendly name of the node */
    TagIdType["Slug"] = "SLUG";
    /** The URI for the node */
    TagIdType["Uri"] = "URI";
})(TagIdType || (TagIdType = {}));
/** Allowed taxonomies */
export var TaxonomyEnum;
(function (TaxonomyEnum) {
    /** Taxonomy enum category */
    TaxonomyEnum["Category"] = "CATEGORY";
    /** Taxonomy enum post_format */
    TaxonomyEnum["Postformat"] = "POSTFORMAT";
    /** Taxonomy enum post_tag */
    TaxonomyEnum["Tag"] = "TAG";
})(TaxonomyEnum || (TaxonomyEnum = {}));
/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
export var TaxonomyIdTypeEnum;
(function (TaxonomyIdTypeEnum) {
    /** The globally unique ID */
    TaxonomyIdTypeEnum["Id"] = "ID";
    /** The name of the taxonomy */
    TaxonomyIdTypeEnum["Name"] = "NAME";
})(TaxonomyIdTypeEnum || (TaxonomyIdTypeEnum = {}));
/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export var TermNodeIdTypeEnum;
(function (TermNodeIdTypeEnum) {
    /** The Database ID for the node */
    TermNodeIdTypeEnum["DatabaseId"] = "DATABASE_ID";
    /** The hashed Global ID */
    TermNodeIdTypeEnum["Id"] = "ID";
    /** The name of the node */
    TermNodeIdTypeEnum["Name"] = "NAME";
    /** Url friendly name of the node */
    TermNodeIdTypeEnum["Slug"] = "SLUG";
    /** The URI for the node */
    TermNodeIdTypeEnum["Uri"] = "URI";
})(TermNodeIdTypeEnum || (TermNodeIdTypeEnum = {}));
/** Options for ordering the connection by */
export var TermObjectsConnectionOrderbyEnum;
(function (TermObjectsConnectionOrderbyEnum) {
    /** Order the connection by item count. */
    TermObjectsConnectionOrderbyEnum["Count"] = "COUNT";
    /** Order the connection by description. */
    TermObjectsConnectionOrderbyEnum["Description"] = "DESCRIPTION";
    /** Order the connection by name. */
    TermObjectsConnectionOrderbyEnum["Name"] = "NAME";
    /** Order the connection by slug. */
    TermObjectsConnectionOrderbyEnum["Slug"] = "SLUG";
    /** Order the connection by term group. */
    TermObjectsConnectionOrderbyEnum["TermGroup"] = "TERM_GROUP";
    /** Order the connection by term id. */
    TermObjectsConnectionOrderbyEnum["TermId"] = "TERM_ID";
    /** Order the connection by term order. */
    TermObjectsConnectionOrderbyEnum["TermOrder"] = "TERM_ORDER";
})(TermObjectsConnectionOrderbyEnum || (TermObjectsConnectionOrderbyEnum = {}));
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export var TrainingIdType;
(function (TrainingIdType) {
    /** Identify a resource by the Database ID. */
    TrainingIdType["DatabaseId"] = "DATABASE_ID";
    /** Identify a resource by the (hashed) Global ID. */
    TrainingIdType["Id"] = "ID";
    /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
    TrainingIdType["Slug"] = "SLUG";
    /** Identify a resource by the URI. */
    TrainingIdType["Uri"] = "URI";
})(TrainingIdType || (TrainingIdType = {}));
/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
export var UserNodeIdTypeEnum;
(function (UserNodeIdTypeEnum) {
    /** The Database ID for the node */
    UserNodeIdTypeEnum["DatabaseId"] = "DATABASE_ID";
    /** The Email of the User */
    UserNodeIdTypeEnum["Email"] = "EMAIL";
    /** The hashed Global ID */
    UserNodeIdTypeEnum["Id"] = "ID";
    /** The slug of the User */
    UserNodeIdTypeEnum["Slug"] = "SLUG";
    /** The URI for the node */
    UserNodeIdTypeEnum["Uri"] = "URI";
    /** The username the User uses to login with */
    UserNodeIdTypeEnum["Username"] = "USERNAME";
})(UserNodeIdTypeEnum || (UserNodeIdTypeEnum = {}));
/** Names of available user roles */
export var UserRoleEnum;
(function (UserRoleEnum) {
    /** User role with specific capabilities */
    UserRoleEnum["Administrator"] = "ADMINISTRATOR";
    /** User role with specific capabilities */
    UserRoleEnum["Author"] = "AUTHOR";
    /** User role with specific capabilities */
    UserRoleEnum["Contributor"] = "CONTRIBUTOR";
    /** User role with specific capabilities */
    UserRoleEnum["Editor"] = "EDITOR";
    /** User role with specific capabilities */
    UserRoleEnum["Subscriber"] = "SUBSCRIBER";
})(UserRoleEnum || (UserRoleEnum = {}));
/** Field to order the connection by */
export var UsersConnectionOrderbyEnum;
(function (UsersConnectionOrderbyEnum) {
    /** Order by display name */
    UsersConnectionOrderbyEnum["DisplayName"] = "DISPLAY_NAME";
    /** Order by email address */
    UsersConnectionOrderbyEnum["Email"] = "EMAIL";
    /** Order by login */
    UsersConnectionOrderbyEnum["Login"] = "LOGIN";
    /** Preserve the login order given in the LOGIN_IN array */
    UsersConnectionOrderbyEnum["LoginIn"] = "LOGIN_IN";
    /** Order by nice name */
    UsersConnectionOrderbyEnum["NiceName"] = "NICE_NAME";
    /** Preserve the nice name order given in the NICE_NAME_IN array */
    UsersConnectionOrderbyEnum["NiceNameIn"] = "NICE_NAME_IN";
    /** Order by registration date */
    UsersConnectionOrderbyEnum["Registered"] = "REGISTERED";
    /** Order by URL */
    UsersConnectionOrderbyEnum["Url"] = "URL";
})(UsersConnectionOrderbyEnum || (UsersConnectionOrderbyEnum = {}));
/** Column used for searching for users. */
export var UsersConnectionSearchColumnEnum;
(function (UsersConnectionSearchColumnEnum) {
    /** The user's email address. */
    UsersConnectionSearchColumnEnum["Email"] = "EMAIL";
    /** The globally unique ID. */
    UsersConnectionSearchColumnEnum["Id"] = "ID";
    /** The username the User uses to login with. */
    UsersConnectionSearchColumnEnum["Login"] = "LOGIN";
    /** A URL-friendly name for the user. The default is the user's username. */
    UsersConnectionSearchColumnEnum["Nicename"] = "NICENAME";
    /** The URL of the user's website. */
    UsersConnectionSearchColumnEnum["Url"] = "URL";
})(UsersConnectionSearchColumnEnum || (UsersConnectionSearchColumnEnum = {}));
