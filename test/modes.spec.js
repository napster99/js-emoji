
describe("Correctly supports different modes", function(){

	//console.log("modes", emoji.inits, emoji.supports_css, emoji.replace_mode);

	var emoji = new EmojiConvertor();

	emoji.img_set = 'apple';
	emoji.img_sets.apple.path = '/';
	emoji.img_sets.apple.sheet = '/sheet.png';
	emoji.colons_mode = false;
	emoji.text_mode = false;
	emoji.include_title = false;
	emoji.allow_native = false;
	emoji.avoid_ms_emoji = true;

	//emoji.init_env();
	//console.log("modes2", emoji.inits, emoji.supports_css, emoji.replace_mode);

	it("Uses spritesheets with CSS background-sizing support", function(){

		emoji.supports_css = true;
		emoji.use_sheet = true;
		emoji.use_css_imgs = false;

		expect(emoji.replace_colons(':cloud:')).toBe('<span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="background: url(/sheet.png);background-position:2.5% 0%;background-size:4100%"></span></span>');
	});

	it("Uses CSS classes with CSS background-sizing support", function(){

		emoji.supports_css = true;
		emoji.use_sheet = false;
		emoji.use_css_imgs = true;

		expect(emoji.replace_colons(':cloud:')).toBe('<span class="emoji emoji-2601"></span>');
	});

	it("Uses individual images with CSS background-sizing support", function(){

		emoji.supports_css = true;
		emoji.use_sheet = false;
		emoji.use_css_imgs = false;

		expect(emoji.replace_colons(':cloud:')).toBe('<span class="emoji emoji-sizer" style="background-image:url(/2601.png)"></span>');
	});

	it("Uses images without CSS background-sizing support", function(){

		emoji.supports_css = false;
		emoji.use_sheet = false;
		emoji.use_css_imgs = false;

		expect(emoji.replace_colons(':cloud:')).toBe('<img src="/2601.png" class="emoji" />');
	});

});

