// ============================================
// TEMPLATE RENDERING ENGINE
// Creates HTML from data
// ============================================

const TemplateEngine = {
    
    // In template-engine.js, update renderNavigation function:

renderNavigation(navItems, siteInfo) {
    // Detect if we're in the templates folder
    const isInTemplates = window.location.pathname.includes('/templates/');
    const pathPrefix = isInTemplates ? '' : 'templates/';
    
    return `
        <nav class="navbar navbar-dark navbar-expand-lg fixed-top">
            <div class="container">
                <a class="navbar-brand" href="${isInTemplates ? '../' : '/'}">
                    <img src="${isInTemplates ? '../' : ''}images/church-logo.png" alt="${siteInfo.name}" height="60">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        ${navItems.map(item => {
                            if (item.dropdown) {
                                return `
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                            ${item.label}
                                        </a>
                                        <ul class="dropdown-menu">
                                            ${item.dropdown.map(sub => {
                                                // Extract just the filename from the URL
                                                const filename = sub.url.split('/').pop();
                                                const finalUrl = isInTemplates ? filename : sub.url;
                                                return `<li><a class="dropdown-item" href="${finalUrl}">${sub.label}</a></li>`;
                                            }).join('')}
                                        </ul>
                                    </li>
                                `;
                            }
                            // For non-dropdown items
                            const filename = item.url.split('/').pop();
                            const finalUrl = item.url === '/' ? (isInTemplates ? '../index.html' : '/') : (isInTemplates ? filename : item.url);
                            return `
                                <li class="nav-item">
                                    <a class="nav-link" href="${finalUrl}">${item.label}</a>
                                </li>
                            `;
                        }).join('')}
                    </ul>
                    <div class="nav-cta">
                        <a href="https://tithe.ly/give_new/www/#/tithely/give-one-time/1317471" class="btn btn-outline-yellow me-2" target="_blank">Donate</a>
                        <a href="${isInTemplates ? '../index.html' : '/'}#live-worship" class="btn btn-outline-yellow me-2">Live Stream</a>
                        <button class="btn btn-outline-yellow" data-bs-toggle="modal" data-bs-target="#suggestionModal">Share Your Ideas</button>
                    </div>
                </div>
            </div>
        </nav>
    `;
},

    // Render Suggestion Modal
    renderSuggestionModal() {
        return `
            <!-- Suggestion Form Modal -->
            <div class="modal fade" id="suggestionModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div>
                                <h5 class="modal-title">Share Your Ideas</h5>
                                <p class="text-muted mb-0 mt-2">We value your insights! Share ideas to help our church grow spiritually, numerically, and in service to the community. Your suggestions matter in building a stronger fellowship.</p>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <form id="suggestionForm">

                                <!-- Honeypot field (do not remove) -->
                                <div style="display:none;">
                                    <label>Leave this empty</label>
                                    <input type="text" id="website" name="website" autocomplete="off">
                                </div>

                                <div class="mb-3">
                                    <label for="fullName" class="form-label">Full Name (Optional)</label>
                                    <input type="text" class="form-control" id="fullName" name="fullName">
                                </div>

                                <div class="mb-3">
                                    <label for="contactInfo" class="form-label">Contact Info: Phone or Email (Optional)</label>
                                    <input type="text" class="form-control" id="contactInfo" name="contactInfo">
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Areas you'd like to suggest ideas for:</label>
                                    <div id="areasCheckboxes">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="areas[]" value="Spiritual Growth" id="spiritualGrowth">
                                            <label class="form-check-label" for="spiritualGrowth">Spiritual Growth</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="areas[]" value="Evangelism" id="evangelism">
                                            <label class="form-check-label" for="evangelism">Evangelism & Outreach</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="areas[]" value="Youth" id="youth">
                                            <label class="form-check-label" for="youth">Youth & Children's Ministry</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="areas[]" value="Music" id="music">
                                            <label class="form-check-label" for="music">Music & Worship</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="areas[]" value="Community" id="community">
                                            <label class="form-check-label" for="community">Community Service & Social Impact</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="areas[]" value="Church Administration" id="administration">
                                            <label class="form-check-label" for="administration">Church Administration & Leadership</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="areas[]" value="Financial Stewardship" id="financial">
                                            <label class="form-check-label" for="financial">Financial Stewardship</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="areas[]" value="Fellowship" id="fellowship">
                                            <label class="form-check-label" for="fellowship">Fellowship & Member Care</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="areas[]" value="Other" id="other">
                                            <label class="form-check-label" for="other">Other</label>
                                        </div>
                                        <div class="mb-3 mt-2" id="otherAreaDiv" style="display: none;">
                                            <input type="text" class="form-control" id="otherAreaText" name="otherArea" placeholder="Please specify">
                                        </div>
                                    </div>
                                    <div class="invalid-feedback" id="areasError">
                                        Please select at least one area.
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label for="suggestions" class="form-label">What Suggestions do you have for the selected areas?</label>
                                    <textarea class="form-control" id="suggestions" name="suggestions" rows="4" required></textarea>
                                </div>

                                <div class="mb-3">
                                    <label for="benefits" class="form-label">How will this benefit the church?</label>
                                    <textarea class="form-control" id="benefits" name="benefits" rows="3" required></textarea>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Would you help implement this?</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="implement" value="Yes" id="implementYes">
                                        <label class="form-check-label" for="implementYes">Yes</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="implement" value="No" id="implementNo">
                                        <label class="form-check-label" for="implementNo">No</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="implement" value="Maybe" id="implementMaybe">
                                        <label class="form-check-label" for="implementMaybe">Maybe</label>
                                    </div>
                                    <div class="invalid-feedback">
                                        Please select an option.
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-primary w-100">Submit Suggestion</button>
                            </form>
                            <!-- Feedback message container -->
                            <div id="suggestionFormFeedback" style="display: none;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    
    // Render Footer
    renderFooter(siteInfo, social) {
        return `
            <footer class="footer bg-dark text-white py-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h5>${siteInfo.name}</h5>
                            <p>${siteInfo.address}</p>
                            <p><a href="tel:${siteInfo.phone}" class="text-decoration-none">${siteInfo.phone}</a></p>
                            <p>${siteInfo.tagline}</p>
                        </div>
                        <div class="col-md-4">
                            <h5>Quick Links</h5>
                            <ul class="list-unstyled">
                                <li><a href="/templates/beliefs.html">About Us</a></li>
                                <li><a href="/templates/mens_ministry.html">Ministries</a></li>
                                <li><a href="/templates/contact.html">Connect</a></li>
                                <li><a href="/">Home</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h5>Connect With Us</h5>
                            <div class="social-links">
                                <a href="${social.twitter}" target="_blank" class="x-link">𝕏</a>
                                <a href="${social.facebook}" target="_blank"><i class="fab fa-facebook"></i></a>
                                <a href="${social.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                                <a href="${social.youtube}" target="_blank"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-12">
                            <hr class="border-light">
                            <p class="text-center mb-0">© ${new Date().getFullYear()} ${siteInfo.name}. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    },

    // Render Page Hero (for internal pages)
    renderPageHero(title, subtitle) {
        return `
            <section class="page-hero py-5">
                <div class="container">
                    <h1 class="hero-title text-center mb-4">${title}</h1>
                    ${subtitle ? `<p class="hero-text text-center">${subtitle}</p>` : ''}
                </div>
            </section>
        `;
    },

    // Render Ministry Hero
    renderMinistryHero(ministry) {
        return `
            <section class="hero-section ${ministry.title.toLowerCase().replace(/\s+/g, '-')}-ministry-bg" 
                     style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../${ministry.heroImage}');">
                <div class="container">
                    <div class="hero-content text-center">
                        <h1 class="hero-title">${ministry.title}</h1>
                        <!-- <p class="hero-text">${ministry.vision}</p> -->
                    </div>
                </div>
            </section>
        `;
    },

    // Render Ministry Leaders
    renderMinistryLeaders(leaders) {
        if (!leaders || leaders.length === 0) return '';
        
        return `
            <section class="leadership-section py-5">
                <div class="container">
                    <h2 class="section-title text-center mb-5" style="color: white;">Ministry Leadership</h2>
                    <div class="row">
                        ${leaders.map(leader => `
                            <div class="col-md-4 mb-4">
                                <div class="leader-card">
                                    <div class="leader-img-wrapper">
                                        <img src="../${leader.image}" alt="${leader.name}" class="leader-img img-fluid">
                                    </div>
                                    <div class="leader-info">
                                        <h4 class="leader-name">${leader.name}</h4>
                                        <p class="leader-position">${leader.position}</p>
                                        ${leader.bio ? `<p class="leader-bio">${leader.bio}</p>` : ''}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    },

    // Render Mission/Vision Cards
    renderMissionVision(mission, vision) {
        return `
            <section class="mission-vision-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <div class="mission-vision-card card h-100 p-4">
                                <div class="card-icon">
                                    <i class="fas fa-bullseye"></i>
                                </div>
                                <h2>Our Mission</h2>
                                <p>${mission}</p>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div class="mission-vision-card card h-100 p-4">
                                <div class="card-icon">
                                    <i class="fas fa-eye"></i>
                                </div>
                                <h2>Our Vision</h2>
                                <p>${vision}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    renderChurchLeadership(leadership) {
        if (!leadership) return '';
        
        return `
            ${leadership.executive ? `
                <section class="py-5">
                    <div class="container">
                        <h2 class="section-title text-center mb-5" style="color: #1B2845;">Pastorial Leadership</h2>
                        <div class="row justify-content-center">
                            ${leadership.executive.map(leader => `
                                <div class="col-md-3 col-sm-6 mb-4">
                                    <div class="leadership-card">
                                        <div class="leadership-image">
                                            <img src="../${leader.image}" alt="${leader.name}" class="img-fluid">
                                        </div>
                                        <div class="leadership-info">
                                            <h4 class="leader-name">${leader.name}</h4>
                                            <p class="leader-position">${leader.position}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
            ` : ''}

            ${leadership.board ? `
                <section class="py-5" style="background-color: #f8f9fa;">
                    <div class="container">
                        <h2 class="section-title text-center mb-5" style="color: #1B2845;">Ministry Leaders</h2>
                        <div class="row">
                            ${leadership.board.map(leader => `
                                <div class="col-md-3 col-sm-6 mb-4">
                                    <div class="leadership-card">
                                        <div class="leadership-image">
                                            <img src="../${leader.image}" alt="${leader.name}" class="img-fluid">
                                        </div>
                                        <div class="leadership-info">
                                            <h4 class="leader-name">${leader.name}</h4>
                                            <p class="leader-position">${leader.position}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
            ` : ''}

            ${leadership.secretaries ? `
                <section class="py-5">
                    <div class="container">
                        <h2 class="section-title text-center mb-5" style="color: #1B2845;">Secretary</h2>
                        <div class="row justify-content-center">
                            ${leadership.secretaries.map(leader => `
                                <div class="col-md-3 col-sm-6 mb-4">
                                    <div class="leadership-card">
                                        <div class="leadership-image">
                                            <img src="../${leader.image}" alt="${leader.name}" class="img-fluid">
                                        </div>
                                        <div class="leadership-info">
                                            <h4 class="leader-name">${leader.name}</h4>
                                            <p class="leader-position">${leader.position}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
            ` : ''}
        `;
    }

};

// Make available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TemplateEngine;
}