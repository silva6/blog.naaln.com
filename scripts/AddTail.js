hexo.extend.filter.register('before_post_render', function(data){

  var file_content = '<div style="clear:both"></div>';
  file_content += '<div class="cc">';
  file_content += 'The [Why·Liam·Blog](https://blog.naaln.com) by [WhyLiam](https://www.naaln.com) is licensed under a [Creative Commons BY-NC-ND 4.0 International License](http://creativecommons.org/licenses/by-nc-nd/4.0/).\n\n';
  file_content += '由[WhyLiam](https://www.naaln.com)创作并维护的[Why·Liam·Blog](https://blog.naaln.com)采用创作共用[保留署名-非商业-禁止演绎4.0国际许可证](http://creativecommons.org/licenses/by-nc-nd/4.0/)。\n\n';
  file_content += '本文首发于[Why·Liam·Blog (https://blog.naaln.com)](https://blog.naaln.com)，版权所有，侵权必究。\n\n';
  file_content += '本文永久链接：['+data.permalink+']('+data.permalink+')';
  file_content += '</div>'

  try {
    if (file_content && data.content.length > 50) {
      data.content += file_content;
    }
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;

    // No process for ENOENT error
  }

  return data;
});
