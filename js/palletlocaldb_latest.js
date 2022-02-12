
	
//Player
var currentHP = localStorage.getItem('currentHP',currentHP);
var maxHP = localStorage.getItem('maxHP',maxHP);
var displayHP = currentHP+"/"+maxHP;
var currentLevel = localStorage.getItem('currentLevel',currentLevel);
var modifier = localStorage.getItem('modifier',modifier);

//Player2
var p2HP = localStorage.getItem('p2HP',p2HP);
var p2MaxHP = localStorage.getItem('p2MaxHP',p2MaxHP);
var p2DisplayHP = p2HP+"/"+p2MaxHP;
var p2Level = localStorage.getItem('p2Level',p2Level);
var p2Modifier = localStorage.getItem('p2Modifier',p2Modifier);

//Player3
var p3HP = localStorage.getItem('p3HP',p3HP);
var p3MaxHP = localStorage.getItem('p3MaxHP',p3MaxHP);
var p3DisplayHP = p3HP+"/"+p3MaxHP;
var p3Level = localStorage.getItem('p3Level',p3Level);
var p3Modifier = localStorage.getItem('p3Modifier',p3Modifier);

//Player4
var p4HP = localStorage.getItem('p4HP',p4HP);
var p4MaxHP = localStorage.getItem('p4MaxHP',p4MaxHP);
var p4DisplayHP = p4HP+"/"+p4MaxHP;
var p4Level = localStorage.getItem('p4Level',p4Level);
var p4Modifier = localStorage.getItem('p4Modifier',p4Modifier);

//Player Inventory
var moves = localStorage.getItem('moves',moves);
var bullets = localStorage.getItem('bullets',bullets);
var potions = localStorage.getItem('potions',potions);
var coffee = localStorage.getItem('coffee',coffee);
var coins = localStorage.getItem('coins',coins);
var stones = localStorage.getItem('stones',stones);

var damageDone = localStorage.getItem('damageDone',damageDone);
var damageNeeded = localStorage.getItem('damageNeeded',damageNeeded);
var damageXPbar = damageDone+"/"+damageNeeded;
var damageFill = (damageDone/damageNeeded)*100+"%";

var followsGained = localStorage.getItem('followsGained',followsGained);
var followsNeeded = localStorage.getItem('followsNeeded',followsNeeded);
var followsXPbar = followsGained+"/"+followsNeeded;
var followsFill = (followsGained/followsNeeded)*100+"%";

var subsGained = localStorage.getItem('subsGained',subsGained);
var subsNeeded = localStorage.getItem('subsNeeded',subsNeeded);
var subsXPbar = subsGained+"/"+subsNeeded;
var subsFill = (subsGained/subsNeeded)*100+"%";

var bitsGained = localStorage.getItem('bitsGained',bitsGained);
var bitsNeeded = localStorage.getItem('bitsNeeded',bitsNeeded);
var bitsXPbar = bitsGained+"/"+bitsNeeded;
var bitsFill = (bitsGained/bitsNeeded)*100+"%";

var enemyType = localStorage.getItem('enemyType',enemyType);
var enemyHP = localStorage.getItem('enemyHP',enemyHP);


$(document).ready(function(){
	$('#cpHP').val(currentHP);
	$('#cpMaxHP').val(maxHP);
	$('#cpLevel').val(currentLevel);
	$('#cpModifier').val(modifier);
//p2
	$('#cpp2HP').val(p2HP);
	$('#cpp2MaxHP').val(p2MaxHP);
	$('#cpp2Level').val(p2Level);
	$('#cpp2Modifier').val(p2Modifier);
//p3
	$('#cpp3HP').val(p3HP);
	$('#cpp3MaxHP').val(p3MaxHP);
	$('#cpp3Level').val(p3Level);
	$('#cpp3Modifier').val(p3Modifier);
//p4
	$('#cpp4HP').val(p4HP);
	$('#cpp4MaxHP').val(p4MaxHP);
	$('#cpp4Level').val(p4Level);
	$('#cpp4Modifier').val(p4Modifier);
//inventory
	$('#cpMoves').val(moves);
	$('#cpBullets').val(bullets);
	$('#cpPotions').val(potions);
	$('#cpCoffee').val(coffee);
	$('#cpCoins').val(coins);
	$('#cpStones').val(stones);
//xp bars
	$('#cpDamage').val(damageDone);
	$('#cpMaxDamage').val(damageNeeded);
	$('#cpFollows').val(followsGained);
	$('#cpFollowsGoal').val(followsNeeded);
	$('#cpSubs').val(subsGained);
	$('#cpSubsGoal').val(subsNeeded);
	$('#cpBits').val(bitsGained);
	$('#cpBitsGoal').val(bitsNeeded);
	$('#damageFill').css("width",damageFill);
	$('#followsFill').css("width",followsFill);
	$('#subsFill').css("width",subsFill);
	$('#bitsFill').css("width",bitsFill);
	//enemy
	$('#cpEnemyType').val(enemyType);
	$('#cpEnemyHP').val(enemyHP);
	
	
//HP functions
	$('#sHP').click( function() {
		var currentHP = $('#cpHP').val();
		document.getElementById('playerHP').innerHTML = displayHP;
		localStorage.setItem('currentHP',currentHP);
		location.reload();
		});
	$('#sMaxHP').click( function() {
		var maxHP = $('#cpMaxHP').val();
		document.getElementById('playerHP').innerHTML = displayHP;
		localStorage.setItem('maxHP',maxHP);
		location.reload();
		});
//level and modifier
	$('#sLevel').click( function() {
		var currentLevel = $('#cpLevel').val();
		document.getElementById('currentLevel').innerHTML = currentLevel;
		localStorage.setItem('currentLevel',currentLevel);
		});
	$('#sModifier').click( function() {
		var modifier = $('#cpModifier').val();
		document.getElementById('playerModifier').innerHTML = "+ "+modifier;
		localStorage.setItem('modifier',modifier);
		});
//p2 HP functions
	$('#sp2HP').click( function() {
		var p2HP = $('#cpp2HP').val();
		document.getElementById('p2DisplayHP').innerHTML = p2DisplayHP;
		localStorage.setItem('p2HP',p2HP);
		location.reload();
		});
	$('#sp2MaxHP').click( function() {
		var p2MaxHP = $('#cpp2MaxHP').val();
		document.getElementById('p2DisplayHP').innerHTML = p2DisplayHP;
		localStorage.setItem('p2MaxHP',p2MaxHP);
		location.reload();
		});
// p2 level and modifier
	$('#sp2Level').click( function() {
		var p2Level = $('#cpp2Level').val();
		document.getElementById('p2Level').innerHTML = p2Level;
		localStorage.setItem('p2Level',p2Level);
		});
	$('#sp2Modifier').click( function() {
		var p2Modifier = $('#cpp2Modifier').val();
		document.getElementById('p2Modifier').innerHTML = "+ "+p2Modifier;
		localStorage.setItem('p2Modifier',p2Modifier);
		});
//p3 HP functions
	$('#sp3HP').click( function() {
		var p3HP = $('#cpp3HP').val();
		document.getElementById('p3DisplayHP').innerHTML = p3DisplayHP;
		localStorage.setItem('p3HP',p3HP);
		location.reload();
		});
	$('#sp3MaxHP').click( function() {
		var p3MaxHP = $('#cpp3MaxHP').val();
		document.getElementById('p3DisplayHP').innerHTML = p3DisplayHP;
		localStorage.setItem('p3MaxHP',p3MaxHP);
		location.reload();
		});
// p3 level and modifier
	$('#sp3Level').click( function() {
		var p3Level = $('#cpp3Level').val();
		document.getElementById('p3Level').innerHTML = p3Level;
		localStorage.setItem('p3Level',p3Level);
		});
	$('#sp3Modifier').click( function() {
		var p3Modifier = $('#cpp3Modifier').val();
		document.getElementById('p3Modifier').innerHTML = "+ "+p3Modifier;
		localStorage.setItem('p3Modifier',p3Modifier);
		});
//p4 HP functions
	$('#sp4HP').click( function() {
		var p4HP = $('#cpp4HP').val();
		document.getElementById('p4DisplayHP').innerHTML = p4DisplayHP;
		localStorage.setItem('p4HP',p4HP);
		location.reload();
		});
	$('#sp4MaxHP').click( function() {
		var p4MaxHP = $('#cpp4MaxHP').val();
		document.getElementById('p4DisplayHP').innerHTML = p4DisplayHP;
		localStorage.setItem('p4MaxHP',p4MaxHP);
		location.reload();
		});
// p4 level and modifier
	$('#sp4Level').click( function() {
		var p4Level = $('#cpp4Level').val();
		document.getElementById('p4Level').innerHTML = p4Level;
		localStorage.setItem('p4Level',p4Level);
		});
	$('#sp4Modifier').click( function() {
		var p4Modifier = $('#cpp4Modifier').val();
		document.getElementById('p4Modifier').innerHTML = "+ "+p4Modifier;
		localStorage.setItem('p4Modifier',p4Modifier);
		});
//moves
	$('#iM').click( function() {
		var moves = $('#cpMoves').val();
		moves++ ;
		$('#cpMoves').val(moves);
		document.getElementById('moves').innerHTML = moves;
		localStorage.setItem('moves',moves);
		});
	$('#dM').click( function() {
		var moves = $('#cpMoves').val();
		moves-- ;
		$('#cpMoves').val(moves);
		document.getElementById('moves').innerHTML = moves;
		localStorage.setItem('moves',moves);
		});
	$('#sM').click( function() {
		var moves = $('#cpMoves').val();
		document.getElementById('moves').innerHTML = moves;
		localStorage.setItem('moves',moves);
		});
//bullets
	$('#iB').click( function() {
		var bullets = $('#cpBullets').val();
		bullets++ ;
		$('#cpBullets').val(bullets);
		document.getElementById('bullets').innerHTML = bullets;
		localStorage.setItem('bullets',bullets);
		});
	$('#dB').click( function() {
		var bullets = $('#cpBullets').val();
		bullets-- ;
		$('#cpBullets').val(bullets);
		document.getElementById('bullets').innerHTML = bullets;
		localStorage.setItem('bullets',bullets);
		});
	$('#sB').click( function() {
		var bullets = $('#cpBullets').val();
		document.getElementById('bullets').innerHTML = bullets;
		localStorage.setItem('bullets',bullets);
		});
//potions
	$('#iP').click( function() {
		var potions = $('#cpPotions').val();
		potions++ ;
		$('#cpPotions').val(potions);
		document.getElementById('potions').innerHTML = potions;
		localStorage.setItem('potions',potions);
		});
	$('#dP').click( function() {
		var potions = $('#cpPotions').val();
		potions-- ;
		$('#cpPotions').val(potions);
		document.getElementById('potions').innerHTML = potions;
		localStorage.setItem('potions',potions);
		});
	$('#sP').click( function() {
		var potions = $('#cpPotions').val();
		document.getElementById('potions').innerHTML = potions;
		localStorage.setItem('potions',potions);
		});
//coffee
	$('#iC').click( function() {
		var coffee = $('#cpCoffee').val();
		coffee++ ;
		$('#cpCoffee').val(coffee);
		document.getElementById('coffee').innerHTML = coffee;
		localStorage.setItem('coffee',coffee);
		});
	$('#dC').click( function() {
		var coffee = $('#cpCoffee').val();
		coffee-- ;
		$('#cpCoffee').val(coffee);
		document.getElementById('coffee').innerHTML = coffee;
		localStorage.setItem('coffee',coffee);
		});
	$('#sC').click( function() {
		var coffee = $('#cpCoffee').val();
		document.getElementById('coffee').innerHTML = coffee;
		localStorage.setItem('coffee',coffee);
		});
//gold
	$('#iG').click( function() {
		var coins = $('#cpCoins').val();
		coins++ ;
		$('#cpCoins').val(coins);
		document.getElementById('coins').innerHTML = coins;
		localStorage.setItem('coins',coins);
		});
	$('#dG').click( function() {
		var coins = $('#cpCoins').val();
		coins-- ;
		$('#cpCoins').val(coins);
		document.getElementById('coins').innerHTML = coins;
		localStorage.setItem('coins',coins);
		});
	$('#sG').click( function() {
		var coins = $('#cpCoins').val();
		document.getElementById('coins').innerHTML = coins;
		localStorage.setItem('coins',coins);
		});
//stones
	$('#iS').click( function() {
		var stones = $('#cpStones').val();
		stones++ ;
		$('#cpStones').val(stones);
		document.getElementById('stones').innerHTML = stones;
		localStorage.setItem('stones',stones);
		});
	$('#dS').click( function() {
		var stones = $('#cpStones').val();
		stones-- ;
		$('#cpStones').val(stones);
		document.getElementById('stones').innerHTML = stones;
		localStorage.setItem('stones',stones);
		});
	$('#sS').click( function() {
		var stones = $('#cpStones').val();
		document.getElementById('stones').innerHTML = stones;
		localStorage.setItem('stones',stones);
		});
//Damage XP Bar
	$('#sDamage').click( function() {
		var damageDone = $('#cpDamage').val();
		localStorage.setItem('damageDone',damageDone);
		document.getElementById('damageFill').innerHTML = damageXPbar;
		location.reload();
		});
	$('#sMaxDamage').click( function() {
		var damageNeeded = $('#cpMaxDamage').val();
		document.getElementById('damageFill').innerHTML = damageXPbar;
		localStorage.setItem('damageNeeded',damageNeeded);
		location.reload();
		});	
//Follows XP Bar
	$('#sFollows').click( function() {
		var followsGained = $('#cpFollows').val();
		localStorage.setItem('followsGained',followsGained);
		document.getElementById('followsFill').innerHTML = followsXPbar;
		location.reload();
		});
	$('#sFollowsGoal').click( function() {
		var followsNeeded = $('#cpFollowsGoal').val();
		document.getElementById('followsFill').innerHTML = damageXPbar;
		localStorage.setItem('followsNeeded',followsNeeded);
		location.reload();
		});	
//subs XP Bar
	$('#sSubs').click( function() {
		var subsGained = $('#cpSubs').val();
		localStorage.setItem('subsGained',subsGained);
		document.getElementById('subsFill').innerHTML = subsXPbar;
		location.reload();
		});
	$('#sSubsGoal').click( function() {
		var subsNeeded = $('#cpSubsGoal').val();
		document.getElementById('subsFill').innerHTML = damageXPbar;
		localStorage.setItem('subsNeeded',subsNeeded);
		location.reload();
		});	
//bits XP Bar
	$('#sBits').click( function() {
		var bitsGained = $('#cpBits').val();
		localStorage.setItem('bitsGained',bitsGained);
		document.getElementById('bitsFill').innerHTML = bitsXPbar;
		location.reload();
		});
	$('#sBitsGoal').click( function() {
		var bitsNeeded = $('#cpBitsGoal').val();
		document.getElementById('bitsFill').innerHTML = damageXPbar;
		localStorage.setItem('bitsNeeded',bitsNeeded);
		location.reload();
		});
//enemy
	$('#sEnemyStats').click( function() {
		var enemyType = $('#cpEnemyType').val();
		var enemyHP = $('#cpEnemyHP').val();
		localStorage.setItem('enemyType',enemyType);
		localStorage.setItem('enemyHP',enemyHP);
		document.getElementById('enemyTypeDisplay').innerHTML = enemyType;
		document.getElementById('enemyHPDisplay').innerHTML = enemyHP;
		location.reload();
		});
//battle player
	$('#ap1').click(function() {
		var hit = 1;
		currentHP = currentHP - hit;
		$('#cpHP').val(currentHP);
		localStorage.setItem('currentHP',currentHP);
		document.getElementById('playerHP').innerHTML = displayHP;
		location.reload();
	});
	$('#ap3').click(function() {
		var hit = 3;
		currentHP = currentHP - hit;
		$('#cpHP').val(currentHP);
		localStorage.setItem('currentHP',currentHP);
		document.getElementById('playerHP').innerHTML = displayHP;
		location.reload();
	});
	$('#ap5').click(function() {
		var hit = 5;
		currentHP = currentHP - hit;
		$('#cpHP').val(currentHP);
		localStorage.setItem('currentHP',currentHP);
		document.getElementById('playerHP').innerHTML = displayHP;
		location.reload();
	});
	$('#ap10').click(function() {
		var hit = 10;
		currentHP = currentHP - hit;
		$('#cpHP').val(currentHP);
		localStorage.setItem('currentHP',currentHP);
		document.getElementById('playerHP').innerHTML = displayHP;
		location.reload();
	});
//Battle p2
	$('#aap1').click(function() {
		var hit = 1;
		p2HP = p2HP - hit;
		$('#cpp2HP').val(p2HP);
		localStorage.setItem('p2HP',p2HP);
		document.getElementById('p2DisplayHP').innerHTML = p2DisplayHP;
		location.reload();
	});
	$('#aap3').click(function() {
		var hit = 3;
		p2HP = p2HP - hit;
		$('#cpp2HP').val(p2HP);
		localStorage.setItem('p2HP',p2HP);
		document.getElementById('p2DisplayHP').innerHTML = p2DisplayHP;
		location.reload();
	});
	$('#aap5').click(function() {
		var hit = 5;
		p2HP = p2HP - hit;
		$('#cpp2HP').val(p2HP);
		localStorage.setItem('p2HP',p2HP);
		document.getElementById('p2DisplayHP').innerHTML = p2DisplayHP;
		location.reload();
	});
	$('#aap10').click(function() {
		var hit = 10;
		p2HP = p2HP - hit;
		$('#cpp2HP').val(p2HP);
		localStorage.setItem('p2HP',p2HP);
		document.getElementById('p2DisplayHP').innerHTML = p2DisplayHP;
		location.reload();
	});
//Battle p3
	$('#a3p1').click(function() {
		var hit = 1;
		p3HP = p3HP - hit;
		$('#cpp3HP').val(p3HP);
		localStorage.setItem('p3HP',p3HP);
		document.getElementById('p3DisplayHP').innerHTML = p3DisplayHP;
		location.reload();
	});
	$('#a3p3').click(function() {
		var hit = 3;
		p3HP = p3HP - hit;
		$('#cpp3HP').val(p3HP);
		localStorage.setItem('p3HP',p3HP);
		document.getElementById('p3DisplayHP').innerHTML = p3DisplayHP;
		location.reload();
	});
	$('#a3p5').click(function() {
		var hit = 5;
		p3HP = p3HP - hit;
		$('#cpp3HP').val(p3HP);
		localStorage.setItem('p3HP',p3HP);
		document.getElementById('p3DisplayHP').innerHTML = p3DisplayHP;
		location.reload();
	});
	$('#a3p10').click(function() {
		var hit = 10;
		p3HP = p3HP - hit;
		$('#cpp3HP').val(p3HP);
		localStorage.setItem('p3HP',p3HP);
		document.getElementById('p3DisplayHP').innerHTML = p3DisplayHP;
		location.reload();
	});
//Battle p4
	$('#a4p1').click(function() {
		var hit = 1;
		p4HP = p4HP - hit;
		$('#cpp4HP').val(p4HP);
		localStorage.setItem('p4HP',p4HP);
		document.getElementById('p4DisplayHP').innerHTML = p4DisplayHP;
		location.reload();
	});
	$('#a4p3').click(function() {
		var hit = 3;
		p4HP = p4HP - hit;
		$('#cpp4HP').val(p4HP);
		localStorage.setItem('p4HP',p4HP);
		document.getElementById('p4DisplayHP').innerHTML = p4DisplayHP;
		location.reload();
	});
	$('#a4p5').click(function() {
		var hit = 5;
		p4HP = p4HP - hit;
		$('#cpp4HP').val(p4HP);
		localStorage.setItem('p4HP',p4HP);
		document.getElementById('p4DisplayHP').innerHTML = p4DisplayHP;
		location.reload();
	});
	$('#a4p10').click(function() {
		var hit = 10;
		p4HP = p4HP - hit;
		$('#cpp4HP').val(p4HP);
		localStorage.setItem('p4HP',p4HP);
		document.getElementById('p4DisplayHP').innerHTML = p4DisplayHP;
		location.reload();
	});
//battle enemy
	$('#ae1').click(function() {
		var hit = 1;
		enemyHP = enemyHP - hit;
		damageDone = parseFloat(damageDone) + parseFloat(hit);
		$('#cpEnemyHP').val(enemyHP);
		$('#cpDamage').val(damageDone);
		localStorage.setItem('damageDone',damageDone);
		localStorage.setItem('enemyHP',enemyHP);
		document.getElementById('damageFill').innerHTML = damageXPbar;
		document.getElementById('enemyHPDisplay').innerHTML = enemyHP;
		location.reload();
	});
	$('#ae3').click(function() {
		var hit = 3;
		enemyHP = enemyHP - hit;
		damageDone = parseFloat(damageDone) + parseFloat(hit);
		$('#cpEnemyHP').val(enemyHP);
		$('#cpDamage').val(damageDone);
		localStorage.setItem('damageDone',damageDone);
		localStorage.setItem('enemyHP',enemyHP);
		document.getElementById('damageFill').innerHTML = damageXPbar;
		document.getElementById('enemyHPDisplay').innerHTML = enemyHP;
		location.reload();
	});
	$('#ae5').click(function() {
		var hit = 5;
		enemyHP = enemyHP - hit;
		damageDone = parseFloat(damageDone) + parseFloat(hit);
		$('#cpEnemyHP').val(enemyHP);
		$('#cpDamage').val(damageDone);
		localStorage.setItem('damageDone',damageDone);
		localStorage.setItem('enemyHP',enemyHP);
		document.getElementById('damageFill').innerHTML = damageXPbar;
		document.getElementById('enemyHPDisplay').innerHTML = enemyHP;
		location.reload();
	});
	$('#ae10').click(function() {
		var hit = 10;
		enemyHP = enemyHP - hit;
		damageDone = parseFloat(damageDone) + parseFloat(hit);
		$('#cpEnemyHP').val(enemyHP);
		$('#cpDamage').val(damageDone);
		localStorage.setItem('damageDone',damageDone);
		localStorage.setItem('enemyHP',enemyHP);
		document.getElementById('damageFill').innerHTML = damageXPbar;
		document.getElementById('enemyHPDisplay').innerHTML = enemyHP;
		location.reload();
	});
});
