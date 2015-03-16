atom_feed :language => 'en-US' do |feed|
  feed.title @title
  feed.updated @updated

  @posts.each do |item|
    next if item.updated_at.blank?

    feed.entry( item, :url => 'https://dmix.ca' + item.url) do |entry|
      entry.url 'https://dmix.ca' + item.url
      entry.title item.title
      entry.content item.content.html_safe, :type => 'html'

      # the strftime is needed to work with Google Reader.
      entry.updated(item.updated_at.strftime("%Y-%m-%dT%H:%M:%SZ"))

      entry.author do |author|
        author.name "dmix"
      end
    end
  end
end
