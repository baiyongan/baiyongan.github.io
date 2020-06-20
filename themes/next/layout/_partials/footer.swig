{%- if theme.footer.beian.enable %}
  <div class="beian">
    {{- next_url('http://www.beian.miit.gov.cn', theme.footer.beian.icp + ' ') }}
    {%- if theme.footer.beian.gongan_icon_url %}
      <img src="{{ theme.footer.beian.gongan_icon_url }}" style="display: inline-block;">
    {%- endif %}
    {%- if theme.footer.beian.gongan_id and theme.footer.beian.gongan_num %}
      {{- next_url('http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=' + theme.footer.beian.gongan_id, theme.footer.beian.gongan_num + ' ') }}
    {%- endif %}
  </div>
{%- endif %}


<div class="beian-meng">
<a href="https://icp.gov.moe" target="_blank">萌 ICP备 </a>
<a href="https://icp.gov.moe/?keyword=20209207" target="_blank"> 20209207号</a>
</div>


<div class="copyright">
  {% set copyright_year = date(null, 'YYYY') %}
  &copy; {% if theme.footer.since and theme.footer.since != copyright_year %}{{ theme.footer.since }} – {% endif %}
  <span itemprop="copyrightYear">{{ copyright_year }}</span>
  <span class="with-love">
    <i class="{{ theme.footer.icon.name }}"></i>
  </span>
  <span class="author" itemprop="copyrightHolder">{{ theme.footer.copyright or author }}</span>
  <span class="post-meta-divider">|</span>



  {%- if theme.footer.powered %}
    <div class="powered-by">
      {%- set next_site = 'https://theme-next.org' %}
      {%- if theme.scheme !== 'Gemini' %}
        {%- set next_site = 'https://' + theme.scheme | lower + '.theme-next.org' %}
      {%- endif %}
      {{- __('footer.powered', next_url('https://hexo.io', 'Hexo', {class: 'theme-link'}) + ' & ' + next_url(next_site, 'NexT.' + theme.scheme, {class: 'theme-link'})) }}
    </div>
  {%- endif %}

</div>

{%- if config.symbols_count_time.total_symbols %}
  <span class="post-meta-item-icon">
    <i class="fa fa-chart-area"></i>
  </span>
  {%- if theme.symbols_count_time.item_text_total %}
    <span class="post-meta-item-text">{{ __('symbols_count_time.count_total') + __('symbol.colon') }}</span>
  {%- endif %}
  <span title="{{ __('symbols_count_time.count_total') }}">{{ symbolsCountTotal(site) }}</span>
{%- endif %}

{%- if config.symbols_count_time.total_time %}
  <span class="post-meta-divider">|</span>
  <span class="post-meta-item-icon">
    <i class="fa fa-coffee"></i>
  </span>
  {%- if theme.symbols_count_time.item_text_total %}
    <span class="post-meta-item-text">{{ __('symbols_count_time.time_total') }} &asymp;</span>
  {%- endif %}
  <span title="{{ __('symbols_count_time.time_total') }}">{{ symbolsTimeTotal(site, config.symbols_count_time.awl, config.symbols_count_time.wpm, __('symbols_count_time.time_minutes')) }}</span>
{%- endif %}


{%- if theme.add_this_id %}
  <div class="addthis_inline_share_toolbox">
    <script src="//s7.addthis.com/js/300/addthis_widget.js#pubid={{ theme.add_this_id }}" async="async"></script>
  </div>
{%- endif %}

{% if theme.footer.counter %}
    <script async src="//dn-lbstatics.qbox.me/busuanzi/2.3/busuanzi.pure.mini.js"></script>
{% endif %}

{{- next_inject('footer') }}
