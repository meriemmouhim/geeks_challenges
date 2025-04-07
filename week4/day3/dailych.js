class Video {
    constructor(title, uploader, time) {
      this.title = title
      this.uploader = uploader
      this.time = time
    }
  
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`)
    }
  }
  const vid1 = new Video("Family Guy Season 22 Episode 17 ", "familyguy", 1200)
  vid1.watch()
  const vid2 = new Video("Fluffy Visits Saudi Arabia ", "gabrieleglsias", 1440)
  vid2.watch()
  const videoData = [
    ["Fluffy's Stand-Up Special", "Gabriel Iglesias", 3600],
    ["Family Guy - Stewie Kills Lois", "Adult Swim", 1320],
    ["Da7ee7 Reacts to TikTok Fails", "Da7ee7", 900],
    ["Gumball - The Remote", "Cartoon Network", 660],
    ["Solo Leveling EP 5", "Solo Leveling", 1500]
  ];
  const videos = videoData.map(data => new Video(...data))
  videos.forEach(vid => vid.watch())