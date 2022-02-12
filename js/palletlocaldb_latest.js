
	
//Player
var currentHP = localStorage.getItem('currentHP',currentHP);
var maxHP = localStorage.getItem('maxHP',maxHP);
var displayHP = currentHP+"/"+maxHP;
var currentLevel = localStorage.getItem('currentLevel',currentLevel);
var modifier = localStorage.getItem('modifier',modifier);

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

var enemyType = "Beetle";
var enemyHP = 50;

$(document).ready(function(){
	$('#cpHP').val(currentHP);
	$('#cpMaxHP').val(maxHP);
	$('#cpLevel').val(currentLevel);
	$('#cpModifier').val(modifier);
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
});
