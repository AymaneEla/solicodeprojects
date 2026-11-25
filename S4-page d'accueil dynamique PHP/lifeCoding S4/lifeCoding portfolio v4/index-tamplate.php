<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/component.css">
    <link rel="stylesheet" href="css/section.css">
    <title>Document</title>
</head>
<body>
    <header class="header">
        <div class="logo"><?= htmlspecialchars($profile['name'])  ?></div>

        <nav class="navBar">
            <ul>
                <?php foreach($navigation as $nav):  ?>
                <li><a href="<?= $nav['link'] ?>"><span class=" <?= ($nav['label']==='Home')?'curse':" " ?>"><?= htmlspecialchars($nav['label']) ?></span></a></li>
                <?php endforeach; ?>
                
            </ul>
        </nav>
    </header>

    <main>
        <section class="home">
            <div class="homeText">
                <span class="pill"><?= htmlspecialchars($profile['pill']) ?></span>
                <h1><?= htmlspecialchars($profile['title']) ?></h1>
                <p><?= htmlspecialchars($profile['text'] )?></p>
                <a href="#contact" class="btn"> Contact Me</a>
            </div>
            <div class="homeImg">
                <img src="img/<?= htmlspecialchars($profile['image']) ?>" alt="profile image" class="profileImg">
            </div>
        </section>

        <section class="skills">
            <h2><span><?= $profile['titleSkills']?></span></h2>
            <div class="cards-list">
                <?php foreach($skills as $ski): ?>
                <div class="card">
                    <h3><?= htmlspecialchars($ski['name']) ?></h3>
                    <img class="imgProject" src="img/<?= htmlspecialchars($profile['image']) ?>" alt="profile image" class="profileImg">
                    <P><?= htmlspecialchars($ski['text']) ?></P>
                </div>
                <?php endforeach; ?>
                
            </div>
        </section>
    </main>

    <footer>
        <div class="info">
            <div class="infoLeft">
                <label for="name">Name:</label>
                <input type="text" id="name">
                <label for="NickName">Nick name:</label>
                <input type="text" id="NickName">
                <label for="email">Email:</label>
                <input type="email" id="email">
            </div>

            <div class="infoRight">
                <label for="message">message:</label>
                <textarea name="" id="message"></textarea>
                <button type="submit" class="btn-two">Send</button>
            </div>
        </div>
    </footer>
</body>
</html>