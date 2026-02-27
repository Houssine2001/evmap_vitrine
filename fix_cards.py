
# Fix team card order: swap second Mohammed card (original) to be Houssine,
# and fix first Mohammed card body (wrong Houssine body) to Mohammed's correct body.
# Note: file uses RIGHT SINGLE QUOTATION MARK (U+2019) not plain apostrophe.

with open(r'c:\Users\Lenovo\Desktop\EvMap_vitrine\evmap\src\App.jsx', 'rb') as f:
    raw = f.read()
content = raw.decode('utf-8')
NL = '\r\n'
SQ = '\u2019'  # RIGHT SINGLE QUOTATION MARK (the smart apostrophe used in the file)

# ---------------------------------------------------------------
# STEP 1: Replace 2nd Mohammed card (original, wrong position)
#         with correct Houssine card
# ---------------------------------------------------------------
old1 = (
    '    {/* Mohamed Marouan Ftiti */}' + NL +
    '    <div className="cat-member-card tech-card animate-card">' + NL +
    '      <div className="cat-member-photo-container">' + NL +
    '        <img ' + NL +
    '          src="/src/assets/images/ftiti-marouan.png"' + NL +
    '          alt="Mohamed Marouan Ftiti"' + NL +
    '          className="cat-member-photo"' + NL +
    '        />' + NL +
    '      </div>' + NL +
    '      <div className="cat-member-content">' + NL +
    '        <h3 className="cat-member-name">Mohamed Marouan Ftiti</h3>' + NL +
    '        <div className="cat-member-role">Frontend & Backoffice Developer</div>' + NL +
    '        <p className="cat-member-bio">' + NL +
    '          D\u00e9veloppement des interfaces web et du dashboard administrateur,' + NL +
    '          gestion des utilisateurs, stations et r\u00e9servations avec une' + NL +
    f'          attention particuli\u00e8re \u00e0 l{SQ}exp\u00e9rience utilisateur.' + NL +
    '        </p>' + NL +
    '        <div className="cat-member-expertise">' + NL +
    '          <span>React.js</span>' + NL +
    '          <span>Laravel</span>' + NL +
    '          <span>JWT</span>' + NL +
    '          <span>Admin Dashboard</span>' + NL +
    '          <span>UX/UI</span>' + NL +
    '        </div>' + NL +
    '      </div>' + NL +
    '    </div>'
)

new1 = (
    '    {/* Houssine Ben Arous \u2013 milieu */}' + NL +
    '    <div className="cat-member-card tech-card animate-card">' + NL +
    '      <div className="cat-member-photo-container">' + NL +
    '        <img ' + NL +
    '          src="/src/assets/images/houssine-benarous.png"' + NL +
    '          alt="Houssine Ben Arous"' + NL +
    '          className="cat-member-photo"' + NL +
    '        />' + NL +
    '      </div>' + NL +
    '      <div className="cat-member-content">' + NL +
    '        <h3 className="cat-member-name">Houssine Ben Arous</h3>' + NL +
    '        <div className="cat-member-role">Tech Lead / Backend Lead</div>' + NL +
    '        <p className="cat-member-bio">' + NL +
    f'          Conception de l{SQ}architecture backend, d\u00e9veloppement des API REST,' + NL +
    '          gestion des bases de donn\u00e9es, s\u00e9curit\u00e9, performance et scalabilit\u00e9' + NL +
    '          de la plateforme EVMapy.' + NL +
    '        </p>' + NL +
    '        <div className="cat-member-expertise">' + NL +
    '          <span>Node.js</span>' + NL +
    '          <span>Express</span>' + NL +
    '          <span>PostgreSQL</span>' + NL +
    '          <span>Docker</span>' + NL +
    '          <span>CI/CD</span>' + NL +
    '        </div>' + NL +
    '      </div>' + NL +
    '    </div>'
)

print('Step 1 old1 found:', old1 in content)
content = content.replace(old1, new1, 1)

# ---------------------------------------------------------------
# STEP 2: Fix card 1 body – it has Mohammed header but Houssine body.
#         Replace the wrong role+bio+expertise with Mohammed's
# ---------------------------------------------------------------
old2 = (
    '        <div className="cat-member-role">Tech Lead / Backend Lead</div>' + NL +
    '        <p className="cat-member-bio">' + NL +
    f'          Conception de l{SQ}architecture backend, d\u00e9veloppement des API REST,' + NL +
    '          gestion des bases de donn\u00e9es, s\u00e9curit\u00e9, performance et scalabilit\u00e9' + NL +
    '          de la plateforme EVMapy.' + NL +
    '        </p>' + NL +
    '        <div className="cat-member-expertise">' + NL +
    '          <span>Node.js</span>' + NL +
    '          <span>Express</span>' + NL +
    '          <span>PostgreSQL</span>' + NL +
    '          <span>Docker</span>' + NL +
    '          <span>CI/CD</span>' + NL +
    '        </div>'
)

new2 = (
    '        <div className="cat-member-role">Frontend &amp; Backoffice Developer</div>' + NL +
    '        <p className="cat-member-bio">' + NL +
    '          D\u00e9veloppement des interfaces web et du dashboard administrateur,' + NL +
    '          gestion des utilisateurs, stations et r\u00e9servations avec une' + NL +
    f'          attention particuli\u00e8re \u00e0 l{SQ}exp\u00e9rience utilisateur.' + NL +
    '        </p>' + NL +
    '        <div className="cat-member-expertise">' + NL +
    '          <span>React.js</span>' + NL +
    '          <span>Laravel</span>' + NL +
    '          <span>JWT</span>' + NL +
    '          <span>Admin Dashboard</span>' + NL +
    '          <span>UX/UI</span>' + NL +
    '        </div>'
)

print('Step 2 old2 found:', old2 in content)
content = content.replace(old2, new2, 1)

with open(r'c:\Users\Lenovo\Desktop\EvMap_vitrine\evmap\src\App.jsx', 'wb') as f:
    f.write(content.encode('utf-8'))

print('Done! Cards swapped successfully.')
