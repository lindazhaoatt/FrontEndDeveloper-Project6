/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

$(function() {
    /* This test suite is all about the RSS feeds definitions, 
    *  the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* To make sure that the allFeeds variable has been 
         * defined and that it is not empty. 
         */
        it('allFeeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Loop through each feed in the allFeeds object and ensures 
         * it has a URL defined and that the URL is not empty.
         */
        it('URL is deinfed and is not empty', function() {
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* Loops through each feed in the allFeeds object and ensures 
         * it has a name defined and that the name is not empty.
         */
        it('Name is deinfed and is not empty', function() {
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* test suite for "The menu" */
    describe('The menu', function() {

        /* Ensure the menu element is hidden by default. */
        it('menu elements is hidden by default', function() {
            var body = $("body");
            expect( body.hasClass("menu-hidden")).toBe(true);
        });


         /* Ensure the menu changes visibility when the menu icon is clicked. */
        it('menu changes visibility when the icon is clicked', function() {
            var body = $("body");
            
            /* menu displays when clicked */
            $('.menu-icon-link').click();
            expect(body.hasClass('menu-hidden')).toBe(false);

            /*menu hides when clicked again.*/
            $('.menu-icon-link').click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
        
    });

    /* test suite for "Initial Entries" */
    describe('Initial Entries', function() {
        /* Ensure when the loadFeed function is called and completes its work, 
         * there is at least a single .entry element within the .feed container.*/
        beforeEach(function(done) { //loadFeed() is asynchronous
            loadFeed(0, done);
        });

        it('at least a single entry element within the feed container', function(done) {
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);
            done();
        });
 
    });


     /* test suite for "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* Ensure when a new feed is loaded by the loadFeed function 
         * that the content actually changes. */
        var HTMLContent = '';
 
        beforeEach(function(done) { //loadFeed() is asynchronous
            loadFeed(0, function() {
                HTMLContent = $('.feed').html(); 

                loadFeed(1, done);
            });
        });

        it('content changes when a new feed is loaded', function(done) {
            expect($('.feed').html()).not.toEqual(HTMLContent);
            done();
        });

    });
 
}());
