export type Passage = {
	label: string;
	book: string;
	chapter: number;
	verse?: number;
};

export type TimelineEvent = {
	id: string;
	era: string;
	date: string;
	dateNote?: string;
	year: string;
	title: string;
	summary: string;
	christ: string;
	connection?: 'fulfillment' | 'trajectory' | 'analogy';
	passages: Passage[];
	importance?: 'major' | 'supporting';
	overlaps?: { label: string; books: string[] }[];
	scene?: 'fall' | 'flood' | 'patriarchs' | 'moriah' | 'exodus' | 'sinai' | 'judges' | 'david' | 'temple' | 'prophets' | 'exile' | 'return' | 'incarnation' | 'pentecost';
	symbol: 'light' | 'tree' | 'ark' | 'stars' | 'lamb' | 'tablets' | 'crown' | 'temple' | 'scroll' | 'cross' | 'flame' | 'city';
};

export type ReadingMovement = {
	number: string;
	title: string;
	period: string;
	description: string;
	readings: string[];
	anchor: Passage;
};

export const readingPlan: ReadingMovement[] = [
	{ number: '01', title: 'Creation to Babel', period: 'Beginnings', description: 'God creates, humanity falls, judgment comes through the flood, and the nations scatter.', readings: ['Genesis 1–11', 'Job 1–8', 'Psalms 1–4'], anchor: { label: 'Begin Genesis 1', book: 'genesis', chapter: 1 } },
	{ number: '02', title: 'Job’s testing', period: 'Wisdom in suffering', description: 'Job and his friends wrestle with suffering, justice, and the wisdom of God.', readings: ['Job 9–28', 'Psalms 5–8'], anchor: { label: 'Begin Job 9', book: 'job', chapter: 9 } },
	{ number: '03', title: 'The LORD answers Job', period: 'Wisdom in suffering', description: 'God reveals his sovereign wisdom, then calls Abram into the land of promise.', readings: ['Job 29–42', 'Genesis 12–18', 'Psalms 9–12'], anchor: { label: 'Begin Job 29', book: 'job', chapter: 29 } },
	{ number: '04', title: 'The patriarchal promise', period: 'Abraham, Isaac & Jacob', description: 'Promise, judgment, substitution, and grace carry the covenant line through Jacob.', readings: ['Genesis 19–36', 'Psalms 13–16'], anchor: { label: 'Begin Genesis 19', book: 'genesis', chapter: 19 } },
	{ number: '05', title: 'Joseph & bondage', period: 'Promise preserved', description: 'God exalts Joseph, preserves Israel through famine, and hears his enslaved people.', readings: ['Genesis 37–50', 'Exodus 1–4', 'Psalms 17–20'], anchor: { label: 'Begin Genesis 37', book: 'genesis', chapter: 37 } },
	{ number: '06', title: 'The LORD defeats Egypt', period: 'Exodus', description: 'The plagues expose Egypt’s gods, Passover shelters Israel, and the sea opens.', readings: ['Exodus 5–22', 'Psalms 21–24'], anchor: { label: 'Begin Exodus 5', book: 'exodus', chapter: 5 } },
	{ number: '07', title: 'God dwells with Israel', period: 'Sinai', description: 'Covenant law, priesthood, sacrifice, rebellion, and tabernacle reveal holy grace.', readings: ['Exodus 23–40', 'Psalms 25–28'], anchor: { label: 'Begin Exodus 23', book: 'exodus', chapter: 23 } },
	{ number: '08', title: 'Sacrifice & holiness', period: 'Leviticus', description: 'The sacrificial and priestly order teaches how an unclean people may draw near.', readings: ['Leviticus 1–24', 'Psalms 29–32'], anchor: { label: 'Begin Leviticus 1', book: 'leviticus', chapter: 1 } },
	{ number: '09', title: 'The wilderness generation', period: 'Numbers', description: 'Israel is numbered, tested, and judged while God remains faithful to his promise.', readings: ['Leviticus 25–27', 'Numbers 1–21', 'Psalms 33–36'], anchor: { label: 'Begin Leviticus 25', book: 'leviticus', chapter: 25 } },
	{ number: '10', title: 'Blessing on the plains', period: 'Numbers & Deuteronomy', description: 'God overturns Balaam’s curse and Moses begins covenant renewal.', readings: ['Numbers 22–36', 'Deuteronomy 1–10', 'Psalms 37–40'], anchor: { label: 'Begin Numbers 22', book: 'numbers', chapter: 22 } },
	{ number: '11', title: 'Choose life', period: 'Deuteronomy', description: 'Moses expounds the covenant, promises heart renewal, and dies outside the land.', readings: ['Deuteronomy 11–34', 'Psalms 41–44'], anchor: { label: 'Begin Deuteronomy 11', book: 'deuteronomy', chapter: 11 } },
	{ number: '12', title: 'Entering the inheritance', period: 'Joshua', description: 'Israel crosses the Jordan and receives victories and land by God’s power.', readings: ['Joshua 1–16', 'Psalms 45–48'], anchor: { label: 'Begin Joshua 1', book: 'joshua', chapter: 1 } },
	{ number: '13', title: 'Covenant in the land', period: 'Joshua & Judges', description: 'The inheritance is allotted, covenant is renewed, and Israel begins to turn aside.', readings: ['Joshua 17–24', 'Judges 1–9', 'Psalms 49–52'], anchor: { label: 'Begin Joshua 17', book: 'joshua', chapter: 17 } },
	{ number: '14', title: 'No king in Israel', period: 'Judges & Ruth', description: 'Compromised deliverers expose Israel’s need while providence preserves David’s line.', readings: ['Judges 10–21', 'Ruth 1–4', 'Psalms 53–56'], anchor: { label: 'Begin Judges 10', book: 'judges', chapter: 10 } },
	{ number: '15', title: 'Samuel, Saul & David', period: 'Rise of the monarchy', description: 'Israel asks for a king, Saul fails, and God chooses the shepherd David.', readings: ['1 Samuel 1–20', 'Psalms 57–60'], anchor: { label: 'Begin 1 Samuel 1', book: '1-samuel', chapter: 1 } },
	{ number: '16', title: 'The rejected anointed one', period: 'David’s suffering', description: 'David suffers before his throne, Saul falls, and the kingdom is established.', readings: ['1 Samuel 21–31', '2 Samuel 1–8', 'Psalms 61–64'], anchor: { label: 'Begin 1 Samuel 21', book: '1-samuel', chapter: 21 } },
	{ number: '17', title: 'Covenant, sin & succession', period: 'David’s reign', description: 'God promises an everlasting throne while David’s sin brings sorrow to his house.', readings: ['2 Samuel 9–24', 'Psalms 65–68'], anchor: { label: 'Begin 2 Samuel 9', book: '2-samuel', chapter: 9 } },
	{ number: '18', title: 'The kingdom remembered', period: 'Chronicles', description: 'Genealogies and David’s rise retell Israel’s history around worship and promise.', readings: ['1 Chronicles 1–15', 'Psalms 69–72'], anchor: { label: 'Begin 1 Chronicles 1', book: '1-chronicles', chapter: 1 } },
	{ number: '19', title: 'Worship prepared', period: 'David’s final years', description: 'The ark comes to Zion and David prepares the people and materials for the temple.', readings: ['1 Chronicles 16–29', 'Psalms 73–76'], anchor: { label: 'Begin 1 Chronicles 16', book: '1-chronicles', chapter: 16 } },
	{ number: '20', title: 'Solomon & the temple', period: 'United monarchy', description: 'Solomon receives wisdom, builds the temple, and dedicates the house of the LORD.', readings: ['1 Kings 1–11', '2 Chronicles 1–6', 'Psalms 77–80'], anchor: { label: 'Begin 1 Kings 1', book: '1-kings', chapter: 1 } },
	{ number: '21', title: 'Wisdom for covenant life', period: 'Solomon & the sages', description: 'Temple worship and proverbial wisdom order life beneath the fear of the LORD.', readings: ['2 Chronicles 7–9', 'Proverbs 1–15', 'Psalms 81–84'], anchor: { label: 'Begin 2 Chronicles 7', book: '2-chronicles', chapter: 7 } },
	{ number: '22', title: 'Wisdom tested', period: 'The sages', description: 'Proverbs concludes and the Preacher begins his search beneath the sun.', readings: ['Proverbs 16–31', 'Ecclesiastes 1–2', 'Psalms 85–88'], anchor: { label: 'Begin Proverbs 16', book: 'proverbs', chapter: 16 } },
	{ number: '23', title: 'Fear God & receive his gifts', period: 'Wisdom books', description: 'Ecclesiastes and the Song explore life, love, limits, and covenant faithfulness.', readings: ['Ecclesiastes 3–12', 'Song of Songs 1–8', 'Psalms 89–92'], anchor: { label: 'Begin Ecclesiastes 3', book: 'ecclesiastes', chapter: 3 } },
	{ number: '24', title: 'The kingdom divided', period: 'Israel & Judah', description: 'Solomon’s apostasy bears fruit in division and competing worship.', readings: ['1 Kings 12–22', '2 Chronicles 10–16', 'Psalms 93–96'], anchor: { label: 'Begin 1 Kings 12', book: '1-kings', chapter: 12 } },
	{ number: '25', title: 'Prophets confront kings', period: 'Elijah, Elisha & Jonah', description: 'The LORD exposes Baal, gives life through his prophets, and shows mercy to Nineveh.', readings: ['2 Kings 1–10', '2 Chronicles 17–20', 'Jonah 1–4', 'Psalms 97–100'], anchor: { label: 'Begin 2 Kings 1', book: '2-kings', chapter: 1 } },
	{ number: '26', title: 'Justice, judgment & remnant', period: 'Amos & the kings', description: 'Amos prosecutes covenant rebellion as both kingdoms move toward judgment.', readings: ['Amos 1–9', '2 Kings 11–17', '2 Chronicles 21–24', 'Psalms 101–104'], anchor: { label: 'Begin Amos 1', book: 'amos', chapter: 1 } },
	{ number: '27', title: 'The faithful Husband', period: 'Hosea', description: 'Hosea announces judgment and astonishing restoring love to an unfaithful people.', readings: ['2 Chronicles 25–28', 'Hosea 1–14', 'Psalms 105–108'], anchor: { label: 'Begin 2 Chronicles 25', book: '2-chronicles', chapter: 25 } },
	{ number: '28', title: 'Immanuel promised', period: 'Micah & Isaiah', description: 'Amid Assyrian darkness, God promises a ruler from Bethlehem and the royal Son.', readings: ['Micah 1–7', 'Isaiah 1–12', 'Psalms 109–112'], anchor: { label: 'Begin Micah 1', book: 'micah', chapter: 1 } },
	{ number: '29', title: 'The LORD rules the nations', period: 'Isaiah', description: 'Oracles against the nations give way to judgment, salvation, and the coming kingdom.', readings: ['Isaiah 13–31', 'Psalms 113–116'], anchor: { label: 'Begin Isaiah 13', book: 'isaiah', chapter: 13 } },
	{ number: '30', title: 'Comfort through the Servant', period: 'Isaiah', description: 'The eighth-century prophet looks beyond exile to the LORD’s incomparable saving work.', readings: ['Isaiah 32–50', 'Psalms 117–120'], anchor: { label: 'Begin Isaiah 32', book: 'isaiah', chapter: 32 } },
	{ number: '31', title: 'The Servant triumphs', period: 'Isaiah', description: 'The sin-bearing Servant brings good news and secures the hope of new creation.', readings: ['Isaiah 51–66', 'Psalms 121–124'], anchor: { label: 'Begin Isaiah 51', book: 'isaiah', chapter: 51 } },
	{ number: '32', title: 'Assyria humbled', period: 'Hezekiah & the prophets', description: 'Jerusalem is spared while Nahum and Zephaniah announce the day of the LORD.', readings: ['2 Kings 18–21', '2 Chronicles 29–33', 'Nahum 1–3', 'Zephaniah 1–3', 'Psalms 125–128'], anchor: { label: 'Begin 2 Kings 18', book: '2-kings', chapter: 18 } },
	{ number: '33', title: 'The Word rediscovered', period: 'Josiah & Jeremiah', description: 'Reform cannot avert judgment; Jeremiah calls Judah back to the covenant LORD.', readings: ['2 Kings 22–23', '2 Chronicles 34–35', 'Jeremiah 1–18', 'Psalms 129–132'], anchor: { label: 'Begin 2 Kings 22', book: '2-kings', chapter: 22 } },
	{ number: '34', title: 'The righteous live by faith', period: 'Judah’s final years', description: 'Jeremiah suffers for the Word while Habakkuk trusts God through approaching invasion.', readings: ['Jeremiah 19–39', 'Habakkuk 1–3', 'Psalms 133–136'], anchor: { label: 'Begin Jeremiah 19', book: 'jeremiah', chapter: 19 } },
	{ number: '35', title: 'Jerusalem mourns', period: 'Judgment & lament', description: 'Jeremiah and the Twelve interpret the day of the LORD; Lamentations grieves the city.', readings: ['Jeremiah 40–52', 'Lamentations 1–5', 'Obadiah', 'Joel 1–3', 'Psalms 137–140'], anchor: { label: 'Begin Jeremiah 40', book: 'jeremiah', chapter: 40 } },
	{ number: '36', title: 'Glory among the exiles', period: 'Jerusalem falls', description: 'Kings and Chronicles record the fall while Ezekiel sees God’s glory in exile.', readings: ['2 Kings 24–25', '2 Chronicles 36', 'Ezekiel 1–20', 'Psalms 141–144'], anchor: { label: 'Begin 2 Kings 24', book: '2-kings', chapter: 24 } },
	{ number: '37', title: 'One Shepherd & one kingdom', period: 'Ezekiel & Daniel', description: 'God promises cleansing and restoration while Daniel witnesses sovereign rule in Babylon.', readings: ['Ezekiel 21–40', 'Daniel 1–4', 'Psalms 145–148'], anchor: { label: 'Begin Ezekiel 21', book: 'ezekiel', chapter: 21 } },
	{ number: '38', title: 'Return & rebuilding', period: 'Persian rule', description: 'Daniel’s visions close, Cyrus releases the exiles, and prophets stir the temple work.', readings: ['Ezekiel 41–48', 'Daniel 5–12', 'Ezra 1–6', 'Haggai 1–2', 'Zechariah 1–6', 'Psalms 149–150'], anchor: { label: 'Begin Ezekiel 41', book: 'ezekiel', chapter: 41 } },
	{ number: '39', title: 'Preserved under Persia', period: 'Esther & Ezra', description: 'God preserves his scattered people and sends Ezra to teach the Law.', readings: ['Zechariah 7–14', 'Esther 1–10', 'Ezra 7–10'], anchor: { label: 'Begin Zechariah 7', book: 'zechariah', chapter: 7 } },
	{ number: '40', title: 'Walls rebuilt, promise awaited', period: 'Nehemiah & Malachi', description: 'The city is rebuilt, yet renewed failure leaves Israel waiting for the coming Lord.', readings: ['Nehemiah 1–13', 'Malachi 1–4'], anchor: { label: 'Begin Nehemiah 1', book: 'nehemiah', chapter: 1 } },
	{ number: '41', title: 'The Word became flesh', period: 'Gospel beginnings', description: 'The four witnesses introduce the eternal Son, his birth, baptism, and early ministry.', readings: ['Luke 1–4', 'John 1–4', 'Matthew 1–4', 'Mark 1'], anchor: { label: 'Begin Luke 1', book: 'luke', chapter: 1 } },
	{ number: '42', title: 'Kingdom authority', period: 'Galilean ministry', description: 'Jesus teaches, heals, forgives, gathers disciples, and reveals the kingdom’s power.', readings: ['Matthew 5–13', 'Mark 2–6', 'Luke 5–9', 'John 5–6'], anchor: { label: 'Begin Matthew 5', book: 'matthew', chapter: 5 } },
	{ number: '43', title: 'The Christ confessed', period: 'The road toward Jerusalem', description: 'The witnesses trace opposition, parables, confession, glory, and the call to discipleship.', readings: ['Matthew 14–18', 'Mark 7–9', 'Luke 10–17', 'John 7–10'], anchor: { label: 'Begin Matthew 14', book: 'matthew', chapter: 14 } },
	{ number: '44', title: 'The King approaches Zion', period: 'Final journey', description: 'Jesus raises Lazarus, enters Jerusalem, judges unbelief, and teaches about the end.', readings: ['Matthew 19–25', 'Mark 10–13', 'Luke 18–21', 'John 11–12'], anchor: { label: 'Begin Matthew 19', book: 'matthew', chapter: 19 } },
	{ number: '45', title: 'Cross & resurrection', period: 'Passion and victory', description: 'All four Gospels bear complementary witness to the new covenant, cross, and empty tomb.', readings: ['Matthew 26–28', 'Mark 14–16', 'Luke 22–24', 'John 13–21'], anchor: { label: 'Begin Matthew 26', book: 'matthew', chapter: 26 } },
	{ number: '46', title: 'The church sent', period: 'Jerusalem to Antioch', description: 'The Spirit gathers the church, persecution scatters witnesses, and Gentiles believe.', readings: ['Acts 1–12', 'James 1–5', 'Galatians 1–6'], anchor: { label: 'Begin Acts 1', book: 'acts', chapter: 1 } },
	{ number: '47', title: 'Grace for the nations', period: 'Early missions', description: 'The gospel crosses regions, the council defends grace, and young churches await Christ.', readings: ['Acts 13–18', '1 Thessalonians 1–5', '2 Thessalonians 1–3', '1 Corinthians 1–10'], anchor: { label: 'Begin Acts 13', book: 'acts', chapter: 13 } },
	{ number: '48', title: 'The apostolic gospel', period: 'Third journey', description: 'Paul corrects Corinth and begins his mature exposition of justification and new life.', readings: ['1 Corinthians 11–16', '2 Corinthians 1–13', 'Acts 19–20', 'Romans 1–4'], anchor: { label: 'Begin 1 Corinthians 11', book: '1-corinthians', chapter: 11 } },
	{ number: '49', title: 'Witness before kings', period: 'Rome', description: 'Romans concludes as Paul bears witness through arrest, voyage, and imprisonment.', readings: ['Romans 5–16', 'Acts 21–28', 'Colossians 1–4', 'Philemon'], anchor: { label: 'Begin Romans 5', book: 'romans', chapter: 5 } },
	{ number: '50', title: 'The household of God', period: 'Apostolic instruction', description: 'Christ orders and preserves his church through doctrine, shepherding, and suffering.', readings: ['Ephesians 1–6', 'Philippians 1–4', '1 Timothy 1–6', 'Titus 1–3', '1 Peter 1–5'], anchor: { label: 'Begin Ephesians 1', book: 'ephesians', chapter: 1 } },
	{ number: '51', title: 'A better country', period: 'Persevering pilgrimage', description: 'The churches guard the deposit, cling to the better covenant, and contend for the faith.', readings: ['Hebrews 1–13', '2 Timothy 1–4', '2 Peter 1–3', 'Jude', '1 John 1–3'], anchor: { label: 'Begin Hebrews 1', book: 'hebrews', chapter: 1 } },
	{ number: '52', title: 'The Lamb will triumph', period: 'The last apostolic witness', description: 'Truth and love mark the church as Revelation unveils the reigning Lamb and coming city.', readings: ['1 John 4–5', '2 John', '3 John', 'Revelation 1–22'], anchor: { label: 'Begin 1 John 4', book: '1-john', chapter: 4 } },
];

export function bibleUrl({ book, chapter, verse }: Passage) {
	const search = new URLSearchParams({ fromTranslation: 'BSB' });
	if (verse) search.set('v', String(verse));
	return `https://lets.bible/bible/${book}/${chapter}?${search.toString()}`;
}
