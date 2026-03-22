# Download all Figma proxy images to local public/images/ folders

$downloads = @(
  # ─── Landing page / common ───
  @{ url="http://localhost:3845/assets/fc3ad109692f10fb24914831e63d38102c62db06.png"; path="public/images/common/covers-bg.png" },
  @{ url="http://localhost:3845/assets/413585f21321db62399ff5f43b52a960bbc4c22f.png"; path="public/images/common/clothing-bg.png" },
  @{ url="http://localhost:3845/assets/96c01392db1204ce14e8e13b1bc1e38b4b4d1525.png"; path="public/images/common/posters-bg.png" },
  @{ url="http://localhost:3845/assets/e56340d5aa7ed23aebf6a54b588a10fc293bcb09.png"; path="public/images/common/typography-bg.png" },
  @{ url="http://localhost:3845/assets/26e54730eb1642d89d5cb1f7715a10eafd1e29a2.png"; path="public/images/common/posters-bg2.png" },
  @{ url="http://localhost:3845/assets/c26fd5a8da3c1449e3f4198611a84e01b11ac417.png"; path="public/images/common/coldminds-card.png" },
  @{ url="http://localhost:3845/assets/34a6eb373e27fd8fa4fc1d815da00bf242c1e91d.png"; path="public/images/common/twodragons-card.png" },
  @{ url="http://localhost:3845/assets/085065d38238a71d622abf880c8403d17f871a65.png"; path="public/images/common/retrogradni-card.png" },

  # ─── Covers page ───
  @{ url="http://localhost:3845/assets/934ad1f80bcb1b560845b5e04239dd7a6bb7f46b.png"; path="public/images/covers/side1-1.png" },
  @{ url="http://localhost:3845/assets/5eef23af385b7c7deffc83cfbe1a17a6cd49a7e0.png"; path="public/images/covers/side1-2.png" },
  @{ url="http://localhost:3845/assets/4101bc80d07df97245e89509c1b8720751098600.png"; path="public/images/covers/side1-3.png" },
  @{ url="http://localhost:3845/assets/e720a3cabbeb5b5b94f7dd51e4a8c5428fb97cfb.png"; path="public/images/covers/main2.png" },
  @{ url="http://localhost:3845/assets/926a3cc9b11ba1f3eb7440edb4efc01bbec12ed6.png"; path="public/images/covers/side2-1.png" },
  @{ url="http://localhost:3845/assets/c35971b7bef947080d1134a56540ee66e4aef86f.png"; path="public/images/covers/side2-2.png" },
  @{ url="http://localhost:3845/assets/74116bebd1cd8cbd5922e715ac5e94c69e3307e5.png"; path="public/images/covers/side2-3.png" },
  @{ url="http://localhost:3845/assets/3328ce54c96e496869f888061c8a47def59cf89d.png"; path="public/images/covers/main3.png" },
  @{ url="http://localhost:3845/assets/ef2c26ccecea5d5e1d8f47426029e275c7b4bfc8.png"; path="public/images/covers/side3-1.png" },
  @{ url="http://localhost:3845/assets/e8be6f04645b9d12e3680f441344d99eefc5ab0f.png"; path="public/images/covers/side3-2.png" },
  @{ url="http://localhost:3845/assets/df8ed0c7b5cf15f5045660db9c22a99cc3c7b124.png"; path="public/images/covers/side3-3.png" },
  @{ url="http://localhost:3845/assets/d3d70a2cc330b29010a44cd66a50caae0a2afbff.png"; path="public/images/covers/main4.png" },
  @{ url="http://localhost:3845/assets/8846c49f2a2c6954c6898389bd22e364b8b53ec7.png"; path="public/images/covers/side4-1.png" },
  @{ url="http://localhost:3845/assets/5f4dc15aba1ca2bdfed99b11cf456df8e0e43645.png"; path="public/images/covers/side4-2.png" },
  @{ url="http://localhost:3845/assets/26ff301472f2562c54e667e1404e6602acdb3979.png"; path="public/images/covers/side4-3.png" },
  @{ url="http://localhost:3845/assets/7cc2cb451b4a627ef193803a1da7a92de913dcc9.png"; path="public/images/covers/other1.png" },
  @{ url="http://localhost:3845/assets/9aae5c99d8af63baf04a647b99924fab9692c330.png"; path="public/images/covers/other2.png" },
  @{ url="http://localhost:3845/assets/db1478b4e908520668a5d87018a2bf0fc5cdf01f.png"; path="public/images/covers/other3.png" },
  @{ url="http://localhost:3845/assets/0233db765cd35a1389005519abd20dfb9ec30283.png"; path="public/images/covers/other4.png" },
  @{ url="http://localhost:3845/assets/7552e099f815277d189608f379c9464f35657657.png"; path="public/images/covers/other5.png" },
  @{ url="http://localhost:3845/assets/46221c8eeb7ef1a7a10e9f9b04a675a916773aa5.png"; path="public/images/covers/other6.png" },
  @{ url="http://localhost:3845/assets/b37a8d5c34a6158a5b8357a08ad4b712596138c5.png"; path="public/images/covers/other7.png" },
  @{ url="http://localhost:3845/assets/0c7f07b712964d95dc7e71e9fe939af1649c07a9.png"; path="public/images/covers/other8.png" },
  @{ url="http://localhost:3845/assets/b069e1dacfa421925d64cf238e8ebae9f2e2e82e.png"; path="public/images/covers/other9.png" },
  @{ url="http://localhost:3845/assets/2a9c0b675725d329ebb62fb71619b9320f9d5209.png"; path="public/images/covers/other10.png" },
  @{ url="http://localhost:3845/assets/34268bb4e44daea426ddda816dee1863788eaeda.png"; path="public/images/covers/other11.png" },

  # ─── Clothing page ───
  @{ url="http://localhost:3845/assets/8a8eb84dbbaad17aaa713468019dd267851a602e.png"; path="public/images/clothing/cloth2.png" },
  @{ url="http://localhost:3845/assets/ba4b6039ca2e2eddda49060f3d6635daa016ad93.png"; path="public/images/clothing/cloth3.png" },
  @{ url="http://localhost:3845/assets/3ede87f9c64062638d636be87835240a94718a11.png"; path="public/images/clothing/cloth4.png" },
  @{ url="http://localhost:3845/assets/66a39be68ca85e3c64381e3e9069294c13b6f8a3.png"; path="public/images/clothing/cloth5.png" },
  @{ url="http://localhost:3845/assets/dc766de06f58b1a859a3a537012bf5c5f15ff278.png"; path="public/images/clothing/cloth6.png" },
  @{ url="http://localhost:3845/assets/92306f3bc266c74fa7d6ddaa2bb68309126041b3.png"; path="public/images/clothing/cloth7.png" },
  @{ url="http://localhost:3845/assets/6a510467f23f046a11df79b9cdae7474095f7b0a.png"; path="public/images/clothing/cloth8.png" },
  @{ url="http://localhost:3845/assets/fd0ba187717ced8c4b2bcaff33f852cd1de0828f.png"; path="public/images/clothing/cloth9.png" },

  # ─── Posters page ───
  @{ url="http://localhost:3845/assets/166b5d50b4dd881eae8b6f372cdc511350d0cc3c.png"; path="public/images/posters/poster1.png" },
  @{ url="http://localhost:3845/assets/28450b03c6f0ef3c12310c00e6240e549f502baf.png"; path="public/images/posters/poster3.png" },
  @{ url="http://localhost:3845/assets/d0cb693719823831b8c79fa9259bd09d59605beb.png"; path="public/images/posters/poster4.png" },
  @{ url="http://localhost:3845/assets/d62107be3b3b368c7455429f153044413b897c90.png"; path="public/images/posters/poster5.png" },
  @{ url="http://localhost:3845/assets/c59985d55154acf795dd12a3c1d3cc427631274c.png"; path="public/images/posters/poster6.png" },
  @{ url="http://localhost:3845/assets/f7432296d5e9a9f1d08d84f8a17e4a974891f9f4.png"; path="public/images/posters/poster8.png" },
  @{ url="http://localhost:3845/assets/1b94d068b072a279ae6bd559d8f72589166c2dbe.png"; path="public/images/posters/poster9.png" },
  @{ url="http://localhost:3845/assets/9501c9be23e894208fc16acda1c54cedabc0d92f.png"; path="public/images/posters/poster10.png" },
  @{ url="http://localhost:3845/assets/e5b124115939d169da2536fe7dcfa476cdf151d7.png"; path="public/images/posters/poster11.png" },
  @{ url="http://localhost:3845/assets/3b7ea27324d1ccea6fdd3a3682d07863e25ee345.png"; path="public/images/posters/poster12.png" },
  @{ url="http://localhost:3845/assets/1636266a822acc6ba3aeb3d4dc2b064dcf72f180.png"; path="public/images/posters/poster13.png" },
  @{ url="http://localhost:3845/assets/f875bdc9d4f792488882c89b2d635964dd66f914.png"; path="public/images/posters/poster14.png" },
  @{ url="http://localhost:3845/assets/fab4f949a34a40dfd91de926447c2275735483cf.png"; path="public/images/posters/poster15.png" },
  @{ url="http://localhost:3845/assets/2c47da1ec6021c568f229af4518efe8aca886542.png"; path="public/images/posters/poster16.png" },

  # ─── Typography page ───
  @{ url="http://localhost:3845/assets/25ddf86d8605423eea55b5bab3e143ac06f484c6.png"; path="public/images/typography/typo1.png" },
  @{ url="http://localhost:3845/assets/3efab0bb0c343928d6236e6bffbac29122d63196.png"; path="public/images/typography/typo2.png" },
  @{ url="http://localhost:3845/assets/ca566f5aed1ca61fb0ccd27e1251540f741b273d.png"; path="public/images/typography/typo3.png" },
  @{ url="http://localhost:3845/assets/ec101919c0c561121dc02c54cb7d29680c01c7a7.png"; path="public/images/typography/typo4.png" },
  @{ url="http://localhost:3845/assets/93942bab8fab506de8917e3082c46c00bbc6ec6e.png"; path="public/images/typography/typo5.png" },
  @{ url="http://localhost:3845/assets/86a9fa250a72430db0195ee7b949e4b803dfa8bc.png"; path="public/images/typography/typo6.png" },
  @{ url="http://localhost:3845/assets/9dc2cc8978397a252c2f3996e795106bb896e87d.png"; path="public/images/typography/typo7.png" },
  @{ url="http://localhost:3845/assets/35a29437fbb171c595b583d6d85ffa6a1ac78829.png"; path="public/images/typography/typo8.png" },
  @{ url="http://localhost:3845/assets/e0f8d87dbdaf0dc96d600ac407434d7d8c7af353.png"; path="public/images/typography/typo9.png" },
  @{ url="http://localhost:3845/assets/d3031fcabdd964decf63890b2e29cee128e97585.png"; path="public/images/typography/typo10.png" },
  @{ url="http://localhost:3845/assets/e9a88710a5e7dcb8f3fe1507f0513dfcfe7147a6.png"; path="public/images/typography/typo11.png" },
  @{ url="http://localhost:3845/assets/100e9be669b3733e800881aca2ebe8214a3b7295.png"; path="public/images/typography/typo12.png" },
  @{ url="http://localhost:3845/assets/622ea355450452db6076393f0884ca4a3739df84.png"; path="public/images/typography/typo13.png" },
  @{ url="http://localhost:3845/assets/154135bfcd979f5ace371114fd2239ba23a43d39.png"; path="public/images/typography/typo14.png" },
  @{ url="http://localhost:3845/assets/73f0d1c62ff7a355125f49bf130fb8beea3b7baf.png"; path="public/images/typography/typo15.png" },
  @{ url="http://localhost:3845/assets/c3dd8b31a363a2296bf797a6fe6a4dc27144f31a.png"; path="public/images/typography/typo16.png" },
  @{ url="http://localhost:3845/assets/3be894fe4c002b43df8d612b4aac07f602183850.png"; path="public/images/typography/typo17.png" },
  @{ url="http://localhost:3845/assets/52f2a227837d408802d2013377a482137d4d1055.png"; path="public/images/typography/typo18.png" },
  @{ url="http://localhost:3845/assets/991ede7212e599f00a323c4d1c10f9609eb63dd8.png"; path="public/images/typography/typo19.png" },
  @{ url="http://localhost:3845/assets/3af7edb616df9c7954f6c9a82dca39106d03ea11.png"; path="public/images/typography/typo20.png" },
  @{ url="http://localhost:3845/assets/9d0922cb848d4835aa9675143dee9fd31dc7909c.png"; path="public/images/typography/typo21.png" },
  @{ url="http://localhost:3845/assets/45b28142d4eab581a68978c6878d2186043d3d37.png"; path="public/images/typography/typo22.png" },
  @{ url="http://localhost:3845/assets/af94b8d72002d5d357247059684624847400ba11.png"; path="public/images/typography/typo24.png" },

  # ─── Retrogradni page ───
  @{ url="http://localhost:3845/assets/93ac27a2f2fc9a9ae031f83981d3e9fee9bb05c3.png"; path="public/images/retrogradni/hero.png" },
  @{ url="http://localhost:3845/assets/087ef8cd46dbf7cfbc1974e62057551a19cce7df.png"; path="public/images/retrogradni/konj-black.png" },
  @{ url="http://localhost:3845/assets/0411c334db34b484985ff76a616091fc717a7f8a.png"; path="public/images/retrogradni/typography.png" },
  @{ url="http://localhost:3845/assets/1003edc3fba8d17c4673f418231155a87186e5e0.png"; path="public/images/retrogradni/konj-logo.png" },
  @{ url="http://localhost:3845/assets/16f1a820ba04ee20790a5da9f91eddfa095d53f0.png"; path="public/images/retrogradni/oba-black.png" },
  @{ url="http://localhost:3845/assets/80bb790345ff78f9286503ca344a363073d4a456.png"; path="public/images/retrogradni/crveno.png" },
  @{ url="http://localhost:3845/assets/13403b00fc110a40523af0532187ce98c697eb23.png"; path="public/images/retrogradni/tvrdjava.png" },
  @{ url="http://localhost:3845/assets/63f249d7ed3ff8ee549934911b9232c57e463384.png"; path="public/images/retrogradni/rect2034.png" },
  @{ url="http://localhost:3845/assets/600ead7ee2362ffff3c2c41ff253dc83fb28ad6c.png"; path="public/images/retrogradni/rect2033.png" },
  @{ url="http://localhost:3845/assets/04f006a3772dcf1367cbe5887437e6bbae6a53c4.png"; path="public/images/retrogradni/konj-logo-final.png" },
  @{ url="http://localhost:3845/assets/0f1e946cc521fecf222a6e2f549db304017b0c1d.png"; path="public/images/retrogradni/image88.png" },
  @{ url="http://localhost:3845/assets/99666f8d7fb257576ad14586ae7d49548995aaa3.png"; path="public/images/retrogradni/rect2035.png" },
  @{ url="http://localhost:3845/assets/fc34706cd6ae199525795670a4ea84f93f40e4a4.png"; path="public/images/retrogradni/spread.png" },

  # ─── 2 Dragons page ───
  @{ url="http://localhost:3845/assets/c207c930183f0281cb1b148cc04bca23722d9da9.png"; path="public/images/two-dragons/hero.png" },
  @{ url="http://localhost:3845/assets/b44b2db2e5e6df60a334c45cf3a7013cac17e5de.png"; path="public/images/two-dragons/image81.png" },
  @{ url="http://localhost:3845/assets/42aee07e0c05268ef67c8b2b7004dc9fd1fea6e1.png"; path="public/images/two-dragons/rect2030.png" },
  @{ url="http://localhost:3845/assets/34d19a36c6ed50309832b04b41f42aa6853d278a.png"; path="public/images/two-dragons/logo-panel.png" },
  @{ url="http://localhost:3845/assets/146299e7e957f1fe412a23e608f222c63ffb1524.svg"; path="public/images/two-dragons/group750.svg" },
  @{ url="http://localhost:3845/assets/53054d3eed36091807302f77d6203eb9de6e6249.svg"; path="public/images/two-dragons/group752.svg" },
  @{ url="http://localhost:3845/assets/a837a7553fe64a3d65da23c7f272420b0364687a.svg"; path="public/images/two-dragons/group751.svg" },
  @{ url="http://localhost:3845/assets/484d4b5c5d83ede5e34e838e05c19a5b26872554.svg"; path="public/images/two-dragons/vector1.svg" },
  @{ url="http://localhost:3845/assets/9435adc595142bc62c23b5f85c6b309f972cc931.svg"; path="public/images/two-dragons/vector2.svg" },
  @{ url="http://localhost:3845/assets/803caf77990b36c177ca58eb5028460f11cccf61.svg"; path="public/images/two-dragons/vector3.svg" },
  @{ url="http://localhost:3845/assets/5a4bae0c7468eaac41a8d16cfd2dbdfb5efbf358.png"; path="public/images/two-dragons/vector6.png" },
  @{ url="http://localhost:3845/assets/3410bb7f2f527ec1da45d197ff2237b629dda4ae.png"; path="public/images/two-dragons/vector7.png" },
  @{ url="http://localhost:3845/assets/ab426f956470ddeb912bdd52e3ac7cfd6fed35cf.png"; path="public/images/two-dragons/vector8.png" },
  @{ url="http://localhost:3845/assets/9f21d83b0d75bbff88ff3309973e84d62111dcd6.png"; path="public/images/two-dragons/vector17.png" },
  @{ url="http://localhost:3845/assets/d80fef8be03ec6fd90a9df09c9ac7cdb67c3eb3d.svg"; path="public/images/two-dragons/dragon-logo.svg" },

  # ─── Cold Minds page ───
  @{ url="http://localhost:3845/assets/e67e3faaee45303e3d2cda526ab8e551f59c07d8.png"; path="public/images/cold-minds/hero.png" },
  @{ url="http://localhost:3845/assets/3d2d5b75f93717365fd264de4ccaf995319f64d9.png"; path="public/images/cold-minds/cm-logo.png" },
  @{ url="http://localhost:3845/assets/0146f2fd6b879ed5553640f18d15050f50c9f4d9.png"; path="public/images/cold-minds/image83.png" },
  @{ url="http://localhost:3845/assets/5036ecd18cd2dddd151c8e08da52330dc033bb7d.svg"; path="public/images/cold-minds/gothic.svg" },
  @{ url="http://localhost:3845/assets/b9e5658da30aaacf29fe64ff22b00fd68a0b58a3.svg"; path="public/images/cold-minds/gothic-alt.svg" },
  @{ url="http://localhost:3845/assets/76f0dc5a15669bcf7e0aa4164d25d3274f28c96a.png"; path="public/images/cold-minds/rect2027.png" },
  @{ url="http://localhost:3845/assets/bc22df108a7382a1d737ffc0faa7331ecd6d15d3.png"; path="public/images/cold-minds/rect2028.png" },
  @{ url="http://localhost:3845/assets/8930e80b18d62455bf62c1cf11319a2943dbfe9c.png"; path="public/images/cold-minds/rect2029.png" },
  @{ url="http://localhost:3845/assets/6d7f47807062fa1436de98a143e8384f95f4825b.png"; path="public/images/cold-minds/coldminds1.png" },
  @{ url="http://localhost:3845/assets/2220b20ab8c4807bee7e292abdf705495cad67ed.png"; path="public/images/cold-minds/rect2042.png" },
  @{ url="http://localhost:3845/assets/8fcee99f27599bce4d5ead59748dbd5474cd7ffa.png"; path="public/images/cold-minds/rect2043.png" },
  @{ url="http://localhost:3845/assets/1d0b7596ee19ecb4150b70f27ee95749ed1af227.png"; path="public/images/cold-minds/rect2044.png" },
  @{ url="http://localhost:3845/assets/aac5ca5f2ab89e0c50ab59671ed422fd38f28f45.png"; path="public/images/cold-minds/image85.png" }
)

$total = $downloads.Count
$i = 0
foreach ($dl in $downloads) {
  $i++
  Write-Host "[$i/$total] Downloading $($dl.path)..."
  try {
    Invoke-WebRequest -Uri $dl.url -OutFile $dl.path -ErrorAction Stop
  } catch {
    Write-Host "  FAILED: $_" -ForegroundColor Red
  }
}
Write-Host "`nDone! Downloaded $i images." -ForegroundColor Green
