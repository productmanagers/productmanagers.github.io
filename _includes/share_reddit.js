<script type="text/javascript">
  // src="http://www.reddit.com/buttonlite.js?url={{production_url}}{{ page.url }}&newwindow=1"
  (function() {
    var styled_submit = '<a style="color: #369; text-decoration: none;" href="http://www.reddit.com/submit?url={{site.production_url}}{{page.url}}&title={{page.title}}" target="_parent">';
    var unstyled_submit = '<a href="http://www.reddit.com/submit?url={{site.production_url}}{{page.url}}&title={{page.title}}" target="http://www.reddit.com/submit?url={{site.production_url}}{{page.url}}&title={{page.title}}">';
    var write_string='<span class="reddit_button" style="';
    write_string += 'color: grey;';
    write_string += '">';
    write_string += unstyled_submit + '<img style="height: 2.7ex; vertical-align:top; margin-left: 1ex; margin-right: 1ex;" src="http://www.redditstatic.com/spreddit1.gif">' + "</a>";
    // write_string += styled_submit + 'submit';
    write_string += '</a>';
    write_string += '</span>';

    document.write(write_string);
    })()
</script>
