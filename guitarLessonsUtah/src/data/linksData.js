const linksData = [
  {
    site: "michaeldowdle.com",
    url: "https://www.michaeldowdle.com/",
    info: "- Master Session Guitarist and regular clinician",
  },
  {
    site: "jamieglaser.com",
    url: "http://www.jamieglaser.com/",
    info: "- Master Session Guitarist",
  },
  {
    site: "digitech.com",
    url: "http://www.digitech.com/",
    info: "- Guitar effects company",
  },
  {
    site: "line6.com",
    url: "https://line6.com/",
    info: "- Guitar effects and amp company",
  },
  {
    site: "halleonard.com",
    url: "https://www.halleonard.com/",
    info: "- Sheet Music Publisher",
  },
  {
    site: "melbay.com",
    url: "https://www.melbay.com/",
    info: "- Sheet Music Publisher",
  },
  {
    site: "alfred.com",
    url: "https://www.alfred.com/",
    info: "- Sheet Music Publisher",
  },
  {
    site: "sheetmusicdirect.com",
    url: "https://www.sheetmusicdirect.com/en-US/",
    info: "- Great source for printable sheet music",
  },
  {
    site: "melanconguitars.com",
    url: "https://melanconguitars.com/",
    info: "- Custom Guitar Builder Mark endorses strongly",
  },
  {
    site: "groshguitars.com",
    url: "https://groshguitars.com/",
    info: "- Custom Guitar Builder",
  },
  {
    site: "ibanez.com",
    url: "https://www.ibanez.com/usa/",
    info: "- Guitar manufacturer",
  },
  {
    site: "larrivee.com",
    url: "https://www.larrivee.com/",
    info: "- Acoustic Guitar Manufacturer",
  },
  {
    site: "guitarrasesteve.es",
    url: "https://guitarrasesteve.es/",
    info: "- Classical guitar manufacturer",
  },
  {
    site: "jimdunlop.com",
    url: "https://www.jimdunlop.com/",
    info: "- Picks, effects, etc.",
  },
  {
    site: "daddario.com",
    url: "https://www.daddario.com/",
    info: "- Guitar string manufacturer",
  },
  {
    site: "chrisproctor.com",
    url: "https://chrisproctor.com/",
    info: "- National Fingerstyle Guitar Champion and clinician",
  },
  {
    site: "rondomusic.com",
    url: "https://www.rondomusic.com/",
    info: "- Great source of discount guitars",
  },
  {
    site: "fsma.org",
    url: "https://www.curesma.org/",
    info: "- All you need to know regarding Spinal Muscular Atrophy",
  },
  {
    site: "summerhaysmusic.com",
    url: "https://www.summerhaysmusic.com/",
    info: "- Music retail store",
  },
  {
    site: "guitarcenter.com",
    url: "https://www.guitarcenter.com/",
    info: "- Musical instrument retailer",
  },
  {
    site: "musiciansfriend.com",
    url: "https://www.musiciansfriend.com/",
    info: "- Musical instrument retailer",
  },
  {
    site: "sweetwater.com",
    url: "https://www.sweetwater.com/",
    info: "- Musical instrument & equipment retailer",
  },
  // URL leads to a broken page
  //   {
  //     site: "snow.edu/music/RichDixonBio.htm",
  //     url: "https://snow.edu/music/RichDixonBio.htm",
  //     info: "Master Session Guitarist and regular clinician",
  //     id: 0,
  //   },
  // URL leads to another page
  //   {
  //     site: "jessethurgood.com",
  //     url: "http://backcountrynetwork.com/",
  //     info: "Award winning songwriter and regular clinician",
  //     id: 17,
  //   },
];

linksData.forEach((obj, i) => (obj.id = i + 1));

export default linksData;
