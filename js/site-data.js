// ============================================
// PIWC PHILADELPHIA WEBSITE CONTENT
// Edit this file to update website content
// Last updated: January 2026
// ============================================

const SITE_DATA = {
    // ==================== SITE INFORMATION ====================
    site: {
        name: "PIWC Philadelphia",
        tagline: "A Place of Love, Healing & Provision",
        address: "2530 Wharton Street, Philadelphia, Pennsylvania 19146",
        phone: "+1 (215) 307-6352",
        logo: "images/church-logo.png",
        youtubeChannel: "UCw2yQUs1nKgTwfSqGsm1h2Q",
        email: "piwcloves@gmail.com"
    },

    // ==================== NAVIGATION MENU ====================
    navigation: [
        { label: "Home", url: "/" },
        {
            label: "About Us",
            dropdown: [
                { label: "Beliefs (Tenets)", url: "templates/beliefs.html" },
                { label: "Mission & Vision", url: "templates/mission-vision.html" },
                { label: "Core Values", url: "templates/core-values.html" },
                { label: "Leadership", url: "templates/leadership.html" },
                { label: "History", url: "templates/history.html" }
            ]
        },
        {
            label: "Ministries",
            dropdown: [
                { label: "Men's Ministry", url: "templates/mens_ministry.html" },
                { label: "Women's Ministry", url: "templates/womens_ministry.html" },
                { label: "Youth and Pensa", url: "templates/youth_and_pensa.html" },
                { label: "Children's Ministry", url: "templates/childrens_ministry.html" },
                { label: "Evangelism Ministry", url: "templates/evangelism.html" },
                { label: "Food Pantry", url: "templates/food_pantry.html" }
            ]
        },
        { label: "Services", url: "templates/services.html" },
        { label: "Connect", url: "templates/contact.html" }
    ],

    // ==================== HERO CAROUSEL SLIDES ====================
    heroSlides: [
        {
            image: "images/heroslides/theme1.jpeg",
            title: "",
            subtitle: "",
            showButtons: false
        },
        {
            image: "images/heroslides/h1.JPG",
            title: "Welcome to PIWC Philadelphia",
            subtitle: "A Place of Love, Healing & Provision",
            buttons: [
                { text: "Join Us This Sunday", url: "#services" },
                { text: "Watch Live", url: "#live-worship" }
            ]
        },
        {
            image: "images/heroslides/h2.JPG",
            title: "True Worship",
            subtitle: '"God is Spirit, and those who worship Him must worship in spirit and truth" - John 4:24',
            buttons: [{ text: "View Services", url: "/templates/services.html" }]
        },
        {
            image: "images/heroslides/h3.jpg",
            title: "Get Involved",
            subtitle: "Discover our various ministries and programs",
            buttons: [{ text: "Explore Ministries", url: "/templates/mens_ministry.html" }]
        },
        {
            image: "images/heroslides/h4.jpg",
            title: "Come as YOU are",
            subtitle: "LOVE is CONTAGIOUS",
            buttons: []
        },
        {
            image: "images/heroslides/h5.jpg",
            title: "Become Part of our Youth Ministry",
            subtitle: "",
            buttons: []
        },
        {
            image: "images/heroslides/h6.jpg",
            title: "",
            subtitle: "",
            buttons: []
        },
        {
            image: "images/heroslides/h9.jpg",
            title: "Join us every Saturday @ 10:00 AM to serve the community.",
            subtitle: "",
            buttons: []
        },
        {
            image: "images/heroslides/h8.jpg",
            title: "",
            subtitle: "",
            buttons: []
        },
        {
            image: "images/heroslides/h7.jpg",
            title: "JESUS LOVES YOU!",
            subtitle: "",
            buttons: []
        }
    ],

    // ==================== SERVICE TIMES ====================
    services: [
        {
            icon: "fas fa-church",
            title: "Sunday Service",
            time: "08:30 AM - 11:00 AM",
            location: "Church Auditorium",
            description: "Join us for inspiring worship and powerful preaching",
            link: "templates/services.html"
        },
        {
            icon: "fas fa-book-bible",
            title: "Bible Study",
            time: "Sundays @ 8:30 AM",
            location: "Church Auditorium",
            description: "Deep dive into God's Word",
            link: "templates/services.html"
        },
        {
            icon: "fas fa-praying-hands",
            title: "Community Outreach & Food Donation",
            time: "Saturdays @ 10:00 AM",
            location: "Church Premises",
            description: "Serving our community with love",
            link: null
        }
    ],

    // ==================== LEADERSHIP ====================
    leaders: [
        {
            image: "/images/leadership/psk.jpg",
            title: "Pennsylvania Area Head",
            name: "Rev. Saka Ntiamoah",
            bio: "Regional Head of The Church of Pentecost Pennsylvania Region, providing spiritual leadership and guidance to our congregation."
        },
        {
            image: "/images/leadership/pk.jpg",
            title: "Philadelphia District Pastor",
            name: "Pastor Prince Nana Kobi",
            bio: "Leading PIWC Philadelphia District with vision and dedication, fostering a community of faith and fellowship."
        },
        {
            image: "/images/leadership/ej.jpg",
            title: "PIWC Presiding Elder",
            name: "Elder Joe Duncan",
            bio: "Supporting the pastoral team with a focus on community outreach, fellowship and youth engagement."
        }
    ],

    // ==================== UPCOMING EVENTS ====================
    events: [
        // {
        //     month: "",
        //     day: "",
        //     title: "",
        //     description: "",
        //     time: "",
        //     location: "",
        //     image: "",
        //     featured: true
        // },
        {
            month: "JAN",
            day: "16-17",
            title: "The Dynamic Residential Retreat",
            description: "The Church Unleashed to transform Society through the Gospel and the Power of the Holy Spirit",
            time: "08:00 PM",
            location: "654 S College Ave, Newark DE 19713",
            image: "/images/events/drr.jpeg",
            featured: true
        },
        {
            month: "JAN",
            day: "30",
            title: "Regional Spiritual Clinic",
            description: "",
            time: "7:30 PM",
            location: "Delaware",
            image: "/images/events/sc.jpeg",
            featured: false
        },

        {
            month: "FEB",
            day: "01",
            title: "Red Carpet Service",
            description: "PIWC appreciation day service & brunch",
            time: "8:30 AM",
            location: "Church Premises",
            image: "/images/events/rc.jpeg",
            featured: false
        }
    ],

    // ==================== BELIEFS/TENETS ====================
    beliefs: [
        {
            icon: "fas fa-bible",
            title: "The Bible",
            content: "We believe in the divine inspiration and authority of the Holy Scriptures. The Bible is infallible in its declaration, final in its authority, comprehensive and all-sufficient in its provisions.",
            scripture: "2 Timothy 3:16-17; 2 Peter 1:20-21"
        },
        {
            icon: "fas fa-crown",
            title: "The One True God",
            content: "We believe in the existence of the One True God, Elohim, maker of the whole universe; indefinable but revealed as Triune God – the Father, the Son, and the Holy Spirit.",
            scripture: "Genesis 1:1, 26; Matthew 3:16-17; 28:19"
        },
        {
            icon: "fas fa-users",
            title: "The Depraved Nature of Humanity",
            content: "We believe that all have sinned and come short of the glory of God, and are subject to eternal punishment, and need Repentance and Regeneration.",
            scripture: "Genesis 3:1-19; Isaiah 53:6; Romans 3:23"
        },
        {
            icon: "fas fa-cross",
            title: "The Savior",
            content: "We believe humanity’s need of a Saviour has been met in the person of Jesus Christ, because of His Deity, Virgin Birth, Atoning death, Resurrection (Matthew 28:5-7; Acts 2:24; Acts 2:36; Acts 10:39-40; 1 Corinthians 15:3-4) and Ascension (Acts 1:9-11; Acts 2:33-36), His Abiding Intercession (Romans 8:34; Hebrews 7:25) and His second coming to judge the living and the dead (Acts 1:11; Acts 10:42; 1 Thessalonians 4:16-18, 2 Timothy 4:1; Revelation 22:12, 20).",
            scripture: ""
        },
        {
            icon: "fas fa-cross",
            title: "Repentance, Justification, and Sanctification",
            content: "We believe that all have sinned and come short of the glory of God, and are subject to eternal punishment, and need Repentance and Regeneration.",
            scripture: "Genesis 3:1-19; Isaiah 53:6; Romans 3:23"
        },
        {
            icon: "fas fa-water",
            title: "The Ordinances of Baptism",
            content: "We believe in the ordinance of Baptism by immersion as a testimony of a convert who has attained a responsible age of 13 years. (Matthew 3:16; Matthew 28:19; Mark 1:9,10; Mark 16:16; Acts 2:38). Infants and children are not baptised but are dedicated to the Lord (Mark 10:13-16; Luke 2:22-24, 34). We believe in the ordinance of the Lord’s Supper or Holy Communion, which should be partaken by all members who are in full fellowship (Luke 22:19, 20; Acts 20:7; 1 Corinthians 11:23-33).",
            scripture: "Genesis 3:1-19; Isaiah 53:6; Romans 3:23"
        },
        {
            icon: "fas fa-dove",
            title: "Baptism, Gifts and Fruit of the Holy Spirit",
            content: "We believe in the Baptism of the Holy Spirit for all believers with the initial evidence of speaking in tongues (Joel 2:28, 29; Acts 2:3,4,38,39; Acts 10:44-46; Acts 19:16), and in the operation of the gifts and fruit of the Holy Spirit (Romans 12:6-8; Galatians 5:22,23 and 1 Corinthians 12:8-11; 28-30).",
            scripture: "Joel 2:28, 29; Acts 2:3,4,38,39; Acts 10:44-46; Acts 19:16"
        },
        {
            icon: "fas fa-hand-holding-medical",
            title: "Divine Healing",
            content: "We believe that the healing of sicknesses and diseases is provided for God’s people in the atonement. However, the Church is not opposed to medication by qualified medical practitioners.",
            scripture: "Isaiah 53:4,5; Matthew 8:7-13; 16,17; Mark 16:17,18; Luke 13:10-16; Acts 10:38; James 5:14-16"
        },
        {
            icon: "fas fa-gift",
            title: "Tithes and Offering",
            content: "We believe in tithing and in the giving of freewill offerings towards the furtherance of the cause of the Kingdom of God. We believe that God blesses a cheerful giver.",
            scripture: "Genesis 14:18-20; Malachi 3:6-10; Matthew 23:23; Acts 20:35; Hebrews 7:1-4; 1 Corinthians 16:1, 2; 2 Corinthians 9:1-9"
        },
        {
            icon: "fas fa-cloud-sun",
            title: "The Second Coming & The Next Life",
            content: "We believe in the second coming of Christ and the resurrection of the dead, both the saved and the unsaved. They that are saved to the resurrection of life and the unsaved to the resurrection of damnation",
            scripture: "Daniel 12:2; Mark 13:26; John 5:28, 29; Acts 1:11; Acts 10:42; Romans 2:7-11; Romans 6:23"
        },
        {
            icon: "fas fa-ring",
            title: "Marriage and Family Life",
            content: "We believe in the institution of marriage as a union established and ordained by God for the lifelong, intimate relationship between a man as husband and a woman as wife as biologically defined at birth. We believe that God instituted marriage primarily for mutual help, fellowship and comfort that one ought to have for the other and for the honourable procreation of children, and their training in love, obedience to the Lord and responsible citizenship.",
            scripture: "Genesis 2:18, Genesis 21-25; Matthew 19:4-6; 1 Corinthians 7:1-2"
        }
        // Add more beliefs as needed
    ],

    // ==================== CORE VALUES ====================
    coreValues: [
        {
            icon: "fas fa-heart",
            title: "Evangelism",
            content: "It is the presentation of Jesus Christ in the power of the Holy Spirit with the view that people will trust Jesus as Saviour and Lord and serve Him in the fellowship of the Church. Evangelism is the responsibility of every Church member and Minister. It is the prime duty of every believer to share his/her faith after conversion. Through cross-cultural, mission-oriented evangelism, Church members who travel to other countries preach Christ, plant Churches and call for Ministers to do same. Besides, as was the practice of the founder, Pastor James McKeown, we respond to calls to missions as led by the Holy Spirit.",
            scripture: ""
        },
        {
            icon: "fas fa-hands-praying",
            title: "Discipleship",
            content: "Discipleship is teaching and training believers to be like Christ in character and to make responsible choices. The emphasis is on holiness, righteousness, faithfulness, honesty, sincerity, humility, prayerfulness and the leading of disciplined and responsible lives. This is done at the level of individuals, where mature members take up the responsibility to disciple new converts. The Church plays a leading role by providing systematic teaching and practical training. Such teaching emphasises the four-square gospel, which is Christ-centred: i.e. Jesus the Saviour, Healer, Baptiser and Soon-Coming King; the Tenets of the Church; Bible reading/study and scripture memorisation and application of the word to life situations. Christ-centered: Jesus the Saviour, Healer, Baptiser and Soon-Coming King",
            scripture: ""
        },
        {
            icon: "fas fa-book-open",
            title: "Ministry Excellence",
            content: "We seek to honour God who gave His best (Christ Jesus as the Saviour) by maintaining a high standard of excellence in all our ministries and activities",
            scripture: "Colossians 3:23-24"
        },
        {
            icon: "fas fa-users",
            title: "Prayer",
            content: "Some of the normal practices are regular prayer for the Holy Spirit baptism with the initial evidence of speaking in tongues. Emphasis is placed on the fruit and gifts of the Spirit in the life of the believer. Prayers are said for healing and deliverance of the afflicted as part of the initial exercises for salvation. Services are marked as truly Pentecostal with praise and worship, teaching, exercise of gifts, prayer, testimonies, etc.",
            scripture: ""
        },
        {
            icon: "fas fa-hands-helping",
            title: "Ministry of The Holy Spirit",
            content: "We believe in the presence of the person of the Holy Spirit and that the Christian life can be led only by His enablement. The new birth is the work of the Holy Spirit, and then the baptism of the Holy Spirit for power to serve and the gifts of the Spirit for building the body of Christ. The Holy Spirit helps the individual to develop a Christ-like character, manifested through bearing the fruit of the Spirit. The leading of the Holy Spirit in all spheres of activity in the Church is paramount. Administrative structures and all other Church distinctiveness have been largely influenced by the leading of the Holy Spirit.",
            scripture: ""
        },
        {
            icon: "fas fa-praying-hands",
            title: "Leadership Development",
            content: "Leadership development is based on the apostolic foundation. Appointments and callings into leadership positions are based on character, charisma, and the leading of the Holy Spirit. Leadership development is from the grassroot level with members maturing to lead sub-groups, Ministries, Assemblies, Districts and Areas. Team spirit with talent development shapes team work. Ministry is by both clergy and laity.",
            scripture: ""
        },
        {
            icon: "fas fa-praying-hands",
            title: "",
            content: "",
            scripture: ""
        },
        {
            icon: "fas fa-praying-hands",
            title: "Tithes and Offering",
            content: "Faithfulness in giving offerings and paying tithes to enhance the ministry of the Church is emphasised. Periodic teaching on this subject is regarded as very important. The Church and members depend solely on God as the source of financial supply. Borrowing by the Church is not encouraged. Lending with interest among members is also discouraged.",
            scripture: ""
        },
        {
            icon: "fas fa-praying-hands",
            title: "Social Activities",
            content: "The Church believes in communal living with members supporting one another, and participating in communal work. The Church may also help the wider community by providing social needs such as health services, education, as well as donating to the needy in society.",
            scripture: ""
        },
        {
            icon: "fas fa-praying-hands",
            title: "Holiness of Members and Officers",
            content: "The Church upholds holiness of members unto the Lord in all their endeavours.",
            scripture: "Romans 12:1; Hebrews 12:14"
        },
        {
            icon: "fas fa-praying-hands",
            title: "Consistent Bible Teaching",
            content: "The Church upholds the teaching of sound biblical doctrine and does not tolerate the propagation of wrong/false doctrine. All types of prayer such as thanksgiving; worship (adoration); supplication; intercession.",
            scripture: "Ephesians 6:18-19; 1 Tim. 2:1-2"
        },
        {
            icon: "fas fa-praying-hands",
            title: "Church Discipline",
            content: "Respect for and obedience to authority. Submission to corrective measures and policies of the Church. Regular fellowship of the saints",
            scripture: "Acts 2:42-47; Hebrews 10:25"
        }
    ],

    // ==================== MISSION & VISION ====================
    mission: "We exist to establish responsible and self-sustaining churches filled with committed, Spirit-filled Christians of character, who will impact their communities.",
    
    vision: "To become a global Pentecostal church that is culturally relevant in vibrant evangelism, church planting, discipleship and holistic ministry.",
    // ==================== MINISTRIES ====================
    ministries: {
        mens: {
            title: "Men's Ministry",
            heroImage: "images/ministries/mens/heromen.JPG",
            mission: "A total Christian Man who is committed, spirit-filled and strong in Christ character to positively impact the family, the church and the community.",
            vision: "To become an effective and significant ministry to passionately reach men for Christ in partnership with the church.",
            activities: [
                "Monthly Men's Meetings",
                "Annual Men's Conference",
                "Community Service Projects",
                "Mentorship Programs"
            ],
            leaders: [
                {
                    name: "Mr. Felix Amankwah",
                    position: "Men's Ministry Leader",
                    image: "images/ministries/mens/mlead.jpg",
                    bio: "Leading men to become strong spiritual warriors"
                },

                {
                name: "Mr. Kwabena Asiedu",
                position: "Assistant Leader",
                image: "images/ministries/mens/leader2.jpg",
                bio: "Mentoring and guiding men in their faith journey"
            }
            ]
        },
        womens: {
            title: "Women's Ministry",
            heroImage: "images/ministries/women/herowo.jpg",
            mission: "A total Christian Woman who is committed, spirit-filled and strong in Christ character to positively impact the family, the church and the community.",
            vision: "To become an effective and significant ministry to passionately reach Women for Christ in partnership with the church.",
            activities: [
                "Weekly Bible Study",
                "Annual Women's Conference",
                "Prayer Groups",
                "Community Outreach"
            ],

            leaders: [
                {
                    name: "Mrs. Lovefelia",
                    position: "Women's Ministry Leader",
                    image: "images/ministries/women/leader.jpg",
                    bio: ""
                },
                
                {
                name: "Leader Name",
                position: "Assistant Leader",
                image: "images/ministries/women/leader2.jpg",
                bio: ""
            }
            ]
        },
        youth: {
            title: "Youth and Pensa",
            heroImage: "images/ministries/youth/youth.jpg",
            mission: "The Youth Ministry exists to mobilize and equip the youth through strategic programs and seasoned tools for them to live for Christ everywhere, make Him known to the world by employing a maze of evangelistic strategies, and positively impact Church and Society.",
            vision: "A holistically empowered youth living for Christ Jesus everywhere, who shall become responsible Christian adults committed to Church and Nation Building.",
            activities: [
                "Youth Fellowship",
                "Youth Camp",
                "Talent Shows",
                "Evangelism Outreach"
            ],
            leaders: [
                {
                    name: "Leader Name",
                    position: "Youth Ministry Leader",
                    image: "images/ministries/youth/leader.jpg",
                    bio: ""
                }]
        },
        children: {
            title: "Children's Ministry",
            heroImage: "images/ministries/children/children.jpg",
            mission: "We exist to establish responsible and self-sustaining churches filled with committed, Spirit-filled Christians of character, who will impact their communities.",
            vision: "A holistically empowered child living for Christ Jesus everywhere, who shall become responsible Christian adults committed to Church and Nation Building.",
            activities: [
                "Sunday School",
                "Children's Church",
                "Vacation Bible School",
                "Special Events"
            ],
            leaders: [
                {
                    name: "Ms. Priscilla Baah",
                    position: "Children Ministry Leader",
                    image: "images/ministries/children/pb.jpg",
                    bio: ""
                }]
        },
        evangelism: {
            title: "Evangelism Ministry",
            heroImage: "images/ministries/evang/evang.jpg",
            mission: "We exist to establish responsible and self-sustaining churches filled with committed, Spirit-filled Christians of character, who will impact their communities.",
            vision: "To become a global Pentecostal church that is culturally relevant in vibrant evangelism, church planting, discipleship and holistic ministry.",
            activities: [
                "Street Evangelism",
                "Door-to-Door Outreach",
                "Community Events",
                "Prison Ministry"
            ],
            leaders: [
                {
                    name: "Bro. Ebenezer Owusu",
                    position: "Evangelism Ministry Leader",
                    image: "images/ministries/evang/eo.jpg",
                    bio: ""
                }]
        },
        foodPantry: {
            title: "Food Pantry",
            heroImage: "images/ministries/food/h4.JPG",
            mission: "To serve our community by providing nutritious food, compassionate support, and hope to individuals and families in need, reflecting God’s love through service and generosity.",
            vision: "A community where no one goes hungry, and all experience the love of Christ through access to food, resources, and support for a better tomorrow.",
            activities: [
                "Door-to-Door Outreach",
                "Community Events"
            ]
        }
    },          

        // ==================== CHURCH LEADERSHIP ====================
    churchLeadership: {
        executive: [
            {
                name: "Rev. Saka Ntiamoah",
                position: "Head of Pennsylvania Region",
                image: "images/leadership/psk.jpg"
            },
            {
                name: "Pastor Prince Nana Kobi",
                position: "Philadelphia District Pastor",
                image: "images/leadership/nana.jpg"
            },
            {
                name: "Elder Joe Duncan",
                position: "PIWC Presiding Elder",
                image: "images/leadership/ej.JPG"
            }
            
        ],
        board: [
            {
                name: "Elder Asante Mensah",
                position: "Financial Secretary",
                image: "images/leadership/eas.jpg"
            },
            {
                name: "Mrs. Lovefelia",
                position: "Womens Ministry Leader",
                image: "images/leadership/board2.jpg"
            },
            {
                name: "Mr. Felix Amankwah",
                position: "Mens Ministry Leader",
                image: "images/leadership/mlead.jpg"
            },
            {
                name: "Ms. Priscilla Baah",
                position: "Childrens Ministry Leader",
                image: "images/leadership/pb.jpg"
            },
            {
                name: "Ms.",
                position: "Youth & Pensa Ministry Leader",
                image: "images/leadership/"
            },
            {
                name: "Dcn. Ebenezer Owusu",
                position: "Evangelism Ministry Leader",
                image: "images/leadership/l5.jpg"
            },
            {
                name: "Mr. Ralph Adjetey",
                position: "Prayer Force Leader",
                image: "images/leadership/l8.jpg"
            },
            {
                name: "Mr. Kevin Ziorklui",
                position: "Ushering Team Leader",
                image: "images/leadership/l7.jpg"
            },
            {
                name: "Elder Ato Boyan",
                position: "Bible Studies Coordinator",
                image: "images/leadership/l6.jpg"
            }
        ],
        secretaries: [
            {
                name: "Ms. Esther Ashley",
                position: "Secretary",
                image: "images/leadership/sec.jpg"
            }
        ]
    },
    

    // ==================== HISTORY ====================
    history: [
        {
            year: "1900",
            title: "Church Founded",
            description: "The Church of Pentecost, like most great institutions, started in a small way. The Church’s beginnings are linked to the ministry of Pastor James McKeown (1900-1989); an Irish missionary, who was sent by the Apostolic Church, Bradford, UK, to the Gold Coast (now Ghana) to assist a group of believers led by Rev. Peter Newman in Asamankese.",
            image: "images/history/cb.jpg"
        },
        {
            year: "1939",
            title: "Doctrinal Division",
            description: "Due to doctrinal differences regarding divine healing, the group split in 1939 into the Christ Apostolic Church and the Apostolic Church, Gold Coast. The latter saw great expansion under Pastor James McKeown.",
            image: "images/history/building.jpg"
        },
        {
            year: "1953",
            title: "Constitutional Crisis",
            description: "In 1953, a constitutional crisis led to the founding of Gold Coast Apostolic Church lead by Pastor James McKeown.",
            image: "images/history/growth.jpg"
        },
        {
            year: "1957",
            title: "Name Change",
            description: "On the attainment of independence by the country in 1957 and following the changes of its name to Ghana, the Gold Coast Apostolic Church was renamed the Ghana Apostolic Church. The split in 1953 did not end the crisis. New conflicts compelled the then President of the Republic of Ghana, His Excellency Dr. Kwame Nkrumah, to advise the leadership of the Ghana Apostolic Church to adopt a new name in order to foster peace and harmony on the Pentecostal front.",
            image: "images/history/growth.jpg"
        },
        {
            year: "1962",
            title: "Birth of The Church of Pentecost",
            description: "On August 1, 1962, following advice from President Dr. Kwame Nkrumah to foster peace and harmony in the Pentecostal community, the Ghana Apostolic Church was officially renamed to The Church of Pentecost.",
            image: "images/history/growth.jpg"
        }
    ],

    // ==================== CONTACT INFO ====================
    contact: {
        address: "2530 Wharton Street, Philadelphia, PA 19146",
        phone: "+1 (215) 307-6352",
        email: "piwcloves@gmail.com",
        hours: [
            { day: "Sunday", time: "8:30 AM - 11:00 AM" },
            { day: "Tuesday", time: "Prayer Meeting - 7:00 PM" },
            { day: "Friday", time: "Bible Study - 7:00 PM" }
        ],
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.6!2d-75.1!3d39.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1"
    },

    // ==================== SOCIAL MEDIA ====================
    social: {
        twitter: "https://x.com/piwcphilly",
        facebook: "https://www.facebook.com/piwcphilly/",
        instagram: "https://www.instagram.com/piwcphilly/",
        youtube: "https://www.youtube.com/channel/UCw2yQUs1nKgTwfSqGsm1h2Q"
    },

    // ==================== ALERT NOTIFICATIONS ====================
    // Set 'enabled: true' to show an alert, 'enabled: false' to hide it
    // Types: 'info' (blue), 'success' (green), 'warning' (yellow), 'urgent' (red)
    alert: {
        enabled: true,
        type: "warning", // info | warning | danger | success
        message: "Due to extreme weather, Sunday's service will be held virtually at <strong>8:15 AM</strong> this week only.",
        dismissible: true
    }
};

// Make data available globally
// Make data available globally (browser-safe)
    window.SITE_DATA = SITE_DATA;

// if (typeof module !== 'undefined' && module.exports) {
//     module.exports = SITE_DATA;
// }

