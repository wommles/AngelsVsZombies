gdjs.Level_321Code = {};
gdjs.Level_321Code.GDBulletObjects1_1final = [];

gdjs.Level_321Code.GDFlameObjects1_1final = [];

gdjs.Level_321Code.GDPlayerObjects1_1final = [];

gdjs.Level_321Code.GDShieldObjects1_1final = [];

gdjs.Level_321Code.GDZombieObjects1_1final = [];

gdjs.Level_321Code.GDSurvivedObjects1= [];
gdjs.Level_321Code.GDSurvivedObjects2= [];
gdjs.Level_321Code.GDSurvivedObjects3= [];
gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDPlayerObjects3= [];
gdjs.Level_321Code.GDZombieObjects1= [];
gdjs.Level_321Code.GDZombieObjects2= [];
gdjs.Level_321Code.GDZombieObjects3= [];
gdjs.Level_321Code.GDBulletObjects1= [];
gdjs.Level_321Code.GDBulletObjects2= [];
gdjs.Level_321Code.GDBulletObjects3= [];
gdjs.Level_321Code.GDReloadObjects1= [];
gdjs.Level_321Code.GDReloadObjects2= [];
gdjs.Level_321Code.GDReloadObjects3= [];
gdjs.Level_321Code.GDPistolObjects1= [];
gdjs.Level_321Code.GDPistolObjects2= [];
gdjs.Level_321Code.GDPistolObjects3= [];
gdjs.Level_321Code.GDDeadZombieObjects1= [];
gdjs.Level_321Code.GDDeadZombieObjects2= [];
gdjs.Level_321Code.GDDeadZombieObjects3= [];
gdjs.Level_321Code.GDShieldObjects1= [];
gdjs.Level_321Code.GDShieldObjects2= [];
gdjs.Level_321Code.GDShieldObjects3= [];
gdjs.Level_321Code.GDFlameWerferObjects1= [];
gdjs.Level_321Code.GDFlameWerferObjects2= [];
gdjs.Level_321Code.GDFlameWerferObjects3= [];
gdjs.Level_321Code.GDFlameObjects1= [];
gdjs.Level_321Code.GDFlameObjects2= [];
gdjs.Level_321Code.GDFlameObjects3= [];
gdjs.Level_321Code.GDStatsObjects1= [];
gdjs.Level_321Code.GDStatsObjects2= [];
gdjs.Level_321Code.GDStatsObjects3= [];
gdjs.Level_321Code.GDFuelObjects1= [];
gdjs.Level_321Code.GDFuelObjects2= [];
gdjs.Level_321Code.GDFuelObjects3= [];
gdjs.Level_321Code.GDAmmoObjects1= [];
gdjs.Level_321Code.GDAmmoObjects2= [];
gdjs.Level_321Code.GDAmmoObjects3= [];
gdjs.Level_321Code.GDFuelBarObjects1= [];
gdjs.Level_321Code.GDFuelBarObjects2= [];
gdjs.Level_321Code.GDFuelBarObjects3= [];
gdjs.Level_321Code.GDAmmoBarObjects1= [];
gdjs.Level_321Code.GDAmmoBarObjects2= [];
gdjs.Level_321Code.GDAmmoBarObjects3= [];
gdjs.Level_321Code.GDCaseObjects1= [];
gdjs.Level_321Code.GDCaseObjects2= [];
gdjs.Level_321Code.GDCaseObjects3= [];
gdjs.Level_321Code.GDLifeHeartObjects1= [];
gdjs.Level_321Code.GDLifeHeartObjects2= [];
gdjs.Level_321Code.GDLifeHeartObjects3= [];
gdjs.Level_321Code.GDWall2Objects1= [];
gdjs.Level_321Code.GDWall2Objects2= [];
gdjs.Level_321Code.GDWall2Objects3= [];
gdjs.Level_321Code.GDSpawnZoneObjects1= [];
gdjs.Level_321Code.GDSpawnZoneObjects2= [];
gdjs.Level_321Code.GDSpawnZoneObjects3= [];
gdjs.Level_321Code.GDLifeLostObjects1= [];
gdjs.Level_321Code.GDLifeLostObjects2= [];
gdjs.Level_321Code.GDLifeLostObjects3= [];
gdjs.Level_321Code.GDStatsTVObjects1= [];
gdjs.Level_321Code.GDStatsTVObjects2= [];
gdjs.Level_321Code.GDStatsTVObjects3= [];
gdjs.Level_321Code.GDFloorObjects1= [];
gdjs.Level_321Code.GDFloorObjects2= [];
gdjs.Level_321Code.GDFloorObjects3= [];
gdjs.Level_321Code.GDDoorObjects1= [];
gdjs.Level_321Code.GDDoorObjects2= [];
gdjs.Level_321Code.GDDoorObjects3= [];
gdjs.Level_321Code.GDnextLevelObjects1= [];
gdjs.Level_321Code.GDnextLevelObjects2= [];
gdjs.Level_321Code.GDnextLevelObjects3= [];
gdjs.Level_321Code.GDNewObjectObjects1= [];
gdjs.Level_321Code.GDNewObjectObjects2= [];
gdjs.Level_321Code.GDNewObjectObjects3= [];
gdjs.Level_321Code.GDNewObject2Objects1= [];
gdjs.Level_321Code.GDNewObject2Objects2= [];
gdjs.Level_321Code.GDNewObject2Objects3= [];
gdjs.Level_321Code.GDArrowObjects1= [];
gdjs.Level_321Code.GDArrowObjects2= [];
gdjs.Level_321Code.GDArrowObjects3= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};
gdjs.Level_321Code.condition2IsTrue_0 = {val:false};
gdjs.Level_321Code.condition3IsTrue_0 = {val:false};
gdjs.Level_321Code.condition4IsTrue_0 = {val:false};
gdjs.Level_321Code.conditionTrue_1 = {val:false};
gdjs.Level_321Code.condition0IsTrue_1 = {val:false};
gdjs.Level_321Code.condition1IsTrue_1 = {val:false};
gdjs.Level_321Code.condition2IsTrue_1 = {val:false};
gdjs.Level_321Code.condition3IsTrue_1 = {val:false};
gdjs.Level_321Code.condition4IsTrue_1 = {val:false};


gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "2019-06-09_-_Fear_-_David_Fesliyan.mp3", 1, true, 60, 1);
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.Level_321Code.GDZombieObjects1});gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ZombieSpawn.mp3", false, 100, 1);
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPistolObjects1Objects = Hashtable.newFrom({"Pistol": gdjs.Level_321Code.GDPistolObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAmmoBarObjects1Objects = Hashtable.newFrom({"AmmoBar": gdjs.Level_321Code.GDAmmoBarObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFlameWerferObjects1Objects = Hashtable.newFrom({"FlameWerfer": gdjs.Level_321Code.GDFlameWerferObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFuelBarObjects1Objects = Hashtable.newFrom({"FuelBar": gdjs.Level_321Code.GDFuelBarObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Level_321Code.GDBulletObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFlameObjects1Objects = Hashtable.newFrom({"Flame": gdjs.Level_321Code.GDFlameObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Level_321Code.GDBulletObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDWall2Objects1Objects = Hashtable.newFrom({"Wall2": gdjs.Level_321Code.GDWall2Objects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.Level_321Code.GDZombieObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDLifeLostObjects1Objects = Hashtable.newFrom({"LifeLost": gdjs.Level_321Code.GDLifeLostObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShieldObjects1Objects = Hashtable.newFrom({"Shield": gdjs.Level_321Code.GDShieldObjects1});gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "OOf (1).mp3", false, 100, 1);
}}

}


};gdjs.Level_321Code.eventsList3 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Fatality (1).mp3", false, 100, 1);
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDZombieObjects2Objects = Hashtable.newFrom({"Zombie": gdjs.Level_321Code.GDZombieObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Level_321Code.GDBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDZombieObjects2Objects = Hashtable.newFrom({"Zombie": gdjs.Level_321Code.GDZombieObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDZombieObjects2Objects = Hashtable.newFrom({"Zombie": gdjs.Level_321Code.GDZombieObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShieldObjects2Objects = Hashtable.newFrom({"Shield": gdjs.Level_321Code.GDShieldObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDZombieObjects2Objects = Hashtable.newFrom({"Zombie": gdjs.Level_321Code.GDZombieObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFlameObjects2Objects = Hashtable.newFrom({"Flame": gdjs.Level_321Code.GDFlameObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDeadZombieObjects1Objects = Hashtable.newFrom({"DeadZombie": gdjs.Level_321Code.GDDeadZombieObjects1});gdjs.Level_321Code.eventsList4 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ZombieDead (1).mp3", false, 100, 1);
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDWall2Objects1Objects = Hashtable.newFrom({"Wall2": gdjs.Level_321Code.GDWall2Objects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDWall2Objects1Objects = Hashtable.newFrom({"Wall2": gdjs.Level_321Code.GDWall2Objects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShieldObjects1Objects = Hashtable.newFrom({"Shield": gdjs.Level_321Code.GDShieldObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPistolObjects1Objects = Hashtable.newFrom({"Pistol": gdjs.Level_321Code.GDPistolObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFlameWerferObjects1Objects = Hashtable.newFrom({"FlameWerfer": gdjs.Level_321Code.GDFlameWerferObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDnextLevelObjects1Objects = Hashtable.newFrom({"nextLevel": gdjs.Level_321Code.GDnextLevelObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.eventsList5 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9574316);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Level_321Code.GDStatsTVObjects1, gdjs.Level_321Code.GDStatsTVObjects2);

{for(var i = 0, len = gdjs.Level_321Code.GDStatsTVObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsTVObjects2[i].setString(gdjs.Level_321Code.GDStatsTVObjects2[i].getString() + ("Music is: ON "));
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9575196);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Level_321Code.GDStatsTVObjects1, gdjs.Level_321Code.GDStatsTVObjects2);

{for(var i = 0, len = gdjs.Level_321Code.GDStatsTVObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsTVObjects2[i].setString(gdjs.Level_321Code.GDStatsTVObjects2[i].getString() + ("SoundFX is:ON "));
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9576100);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Level_321Code.GDStatsTVObjects1, gdjs.Level_321Code.GDStatsTVObjects2);

{for(var i = 0, len = gdjs.Level_321Code.GDStatsTVObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsTVObjects2[i].setString(gdjs.Level_321Code.GDStatsTVObjects2[i].getString() + (""));
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9577028);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Level_321Code.GDStatsTVObjects1, gdjs.Level_321Code.GDStatsTVObjects2);

{for(var i = 0, len = gdjs.Level_321Code.GDStatsTVObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsTVObjects2[i].setString(gdjs.Level_321Code.GDStatsTVObjects2[i].getString() + ("Has Flamethrower TRUE"));
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9577756);
}
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true);
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDStatsTVObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDStatsTVObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsTVObjects1[i].setString(gdjs.Level_321Code.GDStatsTVObjects1[i].getString() + ("Dev Mode: ON"));
}
}}

}


};gdjs.Level_321Code.eventsList6 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.Level_321Code.GDArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Survived"), gdjs.Level_321Code.GDSurvivedObjects1);
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "reload");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Spawn clock");
}{for(var i = 0, len = gdjs.Level_321Code.GDSurvivedObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSurvivedObjects1[i].resetTimer("s");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Start");
}{for(var i = 0, len = gdjs.Level_321Code.GDArrowObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDArrowObjects1[i].hide();
}
}
{ //Subevents
gdjs.Level_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DeadZombie"), gdjs.Level_321Code.GDDeadZombieObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDDeadZombieObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDeadZombieObjects1[i].timerElapsedTime("dead", 3) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDDeadZombieObjects1[k] = gdjs.Level_321Code.GDDeadZombieObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDeadZombieObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDDeadZombieObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDDeadZombieObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDeadZombieObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "Spawn Clock");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.Level_321Code.GDZombieObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDZombieObjects1Objects, gdjs.randomInRange(308, 465), gdjs.randomInRange(213, 355), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawn Clock");
}{for(var i = 0, len = gdjs.Level_321Code.GDZombieObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDZombieObjects1[i].rotateTowardPosition(0, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("Center")), 180, runtimeScene);
}
}
{ //Subevents
gdjs.Level_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Survived"), gdjs.Level_321Code.GDSurvivedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Level_321Code.GDZombieObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDZombieObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDZombieObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")), (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSurvivedObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSurvivedObjects1[i].returnVariable(gdjs.Level_321Code.GDSurvivedObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSurvivedObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSurvivedObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene)));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Pistol"), gdjs.Level_321Code.GDPistolObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPistolObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPistolObjects1 */
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
gdjs.Level_321Code.GDAmmoBarObjects1.length = 0;

{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPistolObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPistolObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setVariableBoolean(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(3), true);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAmmoBarObjects1Objects, 815, 450, "");
}{for(var i = 0, len = gdjs.Level_321Code.GDAmmoBarObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDAmmoBarObjects1[i].setScale(gdjs.Level_321Code.GDAmmoBarObjects1[i].getScale() * (1.45));
}
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}{runtimeScene.getGame().getVariables().get("ammo").setNumber(1000);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlameWerfer"), gdjs.Level_321Code.GDFlameWerferObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFlameWerferObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDFlameWerferObjects1 */
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
gdjs.Level_321Code.GDFuelBarObjects1.length = 0;

{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDFlameWerferObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlameWerferObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setVariableBoolean(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(4), true);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFuelBarObjects1Objects, 816, 281, "");
}{for(var i = 0, len = gdjs.Level_321Code.GDFuelBarObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFuelBarObjects1[i].setScale(gdjs.Level_321Code.GDFuelBarObjects1[i].getScale() * (1.45));
}
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true);
}{runtimeScene.getGame().getVariables().get("fuel").setNumber(1000);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
gdjs.Level_321Code.condition2IsTrue_0.val = false;
gdjs.Level_321Code.condition3IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "reload");
}if ( gdjs.Level_321Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getAnimation() == 1 ) {
        gdjs.Level_321Code.condition2IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}if ( gdjs.Level_321Code.condition2IsTrue_0.val ) {
{
gdjs.Level_321Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) > 0;
}}
}
}
if (gdjs.Level_321Code.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AmmoBar"), gdjs.Level_321Code.GDAmmoBarObjects1);
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
gdjs.Level_321Code.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBulletObjects1Objects, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("Gun")), (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("Gun")), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBulletObjects1[i].setAngle((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getAngle()));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBulletObjects1[i].addPolarForce((gdjs.Level_321Code.GDBulletObjects1[i].getAngle()), 250, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "reload");
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(2)).sub(8);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDAmmoBarObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDAmmoBarObjects1[i].setWidth(gdjs.Level_321Code.GDAmmoBarObjects1[i].getWidth() - (4));
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).sub(8);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
gdjs.Level_321Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getAnimation() == 2 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.Level_321Code.condition1IsTrue_0.val ) {
{
gdjs.Level_321Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) > 0;
}}
}
if (gdjs.Level_321Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FuelBar"), gdjs.Level_321Code.GDFuelBarObjects1);
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
gdjs.Level_321Code.GDFlameObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFlameObjects1Objects, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("Flame")), (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("Flame")), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDFlameObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlameObjects1[i].setAngle((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getAngle()));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDFlameObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlameObjects1[i].setScale(2);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDFlameObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlameObjects1[i].setPosition((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("Flame")),(( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("Flame")));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDFlameObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlameObjects1[i].resetTimer("flameLife");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(1)).sub(5);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDFuelBarObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFuelBarObjects1[i].setWidth(gdjs.Level_321Code.GDFuelBarObjects1[i].getWidth() - (0.47));
}
}{runtimeScene.getGame().getVariables().get("fuel").sub(5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flame"), gdjs.Level_321Code.GDFlameObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDFlameObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDFlameObjects1[i].timerElapsedTime("flameLife", 0.15) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDFlameObjects1[k] = gdjs.Level_321Code.GDFlameObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDFlameObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDFlameObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDFlameObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlameObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level_321Code.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall2"), gdjs.Level_321Code.GDWall2Objects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBulletObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDWall2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDBulletObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Level_321Code.GDZombieObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDZombieObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LifeHeart"), gdjs.Level_321Code.GDLifeHeartObjects1);
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
gdjs.Level_321Code.GDLifeLostObjects1.length = 0;

gdjs.Level_321Code.GDShieldObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDLifeLostObjects1Objects, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("Center")), (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDLifeHeartObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDLifeHeartObjects1[i].setAnimation(gdjs.Level_321Code.GDLifeHeartObjects1[i].getAnimation() + (1));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDLifeLostObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDLifeLostObjects1[i].resetTimer("LL");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShieldObjects1Objects, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")), (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDShieldObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShieldObjects1[i].resetTimer("length");
}
}
{ //Subevents
gdjs.Level_321Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Survived"), gdjs.Level_321Code.GDSurvivedObjects1);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "survived");
}{runtimeScene.getGame().getVariables().get("Survived").setNumber(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}{for(var i = 0, len = gdjs.Level_321Code.GDSurvivedObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSurvivedObjects1[i].returnVariable(gdjs.Level_321Code.GDSurvivedObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene));
}
}
{ //Subevents
gdjs.Level_321Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.Level_321Code.GDBulletObjects1.length = 0;

gdjs.Level_321Code.GDFlameObjects1.length = 0;

gdjs.Level_321Code.GDPlayerObjects1.length = 0;

gdjs.Level_321Code.GDShieldObjects1.length = 0;

gdjs.Level_321Code.GDZombieObjects1.length = 0;


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.GDBulletObjects1_1final.length = 0;gdjs.Level_321Code.GDFlameObjects1_1final.length = 0;gdjs.Level_321Code.GDPlayerObjects1_1final.length = 0;gdjs.Level_321Code.GDShieldObjects1_1final.length = 0;gdjs.Level_321Code.GDZombieObjects1_1final.length = 0;gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
gdjs.Level_321Code.condition2IsTrue_1.val = false;
gdjs.Level_321Code.condition3IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level_321Code.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Level_321Code.GDZombieObjects2);
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDZombieObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBulletObjects2Objects, false, runtimeScene, false);
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_321Code.GDBulletObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDBulletObjects1_1final.indexOf(gdjs.Level_321Code.GDBulletObjects2[j]) === -1 )
            gdjs.Level_321Code.GDBulletObjects1_1final.push(gdjs.Level_321Code.GDBulletObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.Level_321Code.GDZombieObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDZombieObjects1_1final.indexOf(gdjs.Level_321Code.GDZombieObjects2[j]) === -1 )
            gdjs.Level_321Code.GDZombieObjects1_1final.push(gdjs.Level_321Code.GDZombieObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Level_321Code.GDZombieObjects2);
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDZombieObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects2Objects, false, runtimeScene, false);
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_321Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDPlayerObjects1_1final.indexOf(gdjs.Level_321Code.GDPlayerObjects2[j]) === -1 )
            gdjs.Level_321Code.GDPlayerObjects1_1final.push(gdjs.Level_321Code.GDPlayerObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.Level_321Code.GDZombieObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDZombieObjects1_1final.indexOf(gdjs.Level_321Code.GDZombieObjects2[j]) === -1 )
            gdjs.Level_321Code.GDZombieObjects1_1final.push(gdjs.Level_321Code.GDZombieObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Shield"), gdjs.Level_321Code.GDShieldObjects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Level_321Code.GDZombieObjects2);
gdjs.Level_321Code.condition2IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDZombieObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShieldObjects2Objects, false, runtimeScene, true);
if( gdjs.Level_321Code.condition2IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_321Code.GDShieldObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDShieldObjects1_1final.indexOf(gdjs.Level_321Code.GDShieldObjects2[j]) === -1 )
            gdjs.Level_321Code.GDShieldObjects1_1final.push(gdjs.Level_321Code.GDShieldObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.Level_321Code.GDZombieObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDZombieObjects1_1final.indexOf(gdjs.Level_321Code.GDZombieObjects2[j]) === -1 )
            gdjs.Level_321Code.GDZombieObjects1_1final.push(gdjs.Level_321Code.GDZombieObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Flame"), gdjs.Level_321Code.GDFlameObjects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Level_321Code.GDZombieObjects2);
gdjs.Level_321Code.condition3IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDZombieObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFlameObjects2Objects, false, runtimeScene, false);
if( gdjs.Level_321Code.condition3IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_321Code.GDFlameObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDFlameObjects1_1final.indexOf(gdjs.Level_321Code.GDFlameObjects2[j]) === -1 )
            gdjs.Level_321Code.GDFlameObjects1_1final.push(gdjs.Level_321Code.GDFlameObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.Level_321Code.GDZombieObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDZombieObjects1_1final.indexOf(gdjs.Level_321Code.GDZombieObjects2[j]) === -1 )
            gdjs.Level_321Code.GDZombieObjects1_1final.push(gdjs.Level_321Code.GDZombieObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_321Code.GDBulletObjects1_1final, gdjs.Level_321Code.GDBulletObjects1);
gdjs.copyArray(gdjs.Level_321Code.GDFlameObjects1_1final, gdjs.Level_321Code.GDFlameObjects1);
gdjs.copyArray(gdjs.Level_321Code.GDPlayerObjects1_1final, gdjs.Level_321Code.GDPlayerObjects1);
gdjs.copyArray(gdjs.Level_321Code.GDShieldObjects1_1final, gdjs.Level_321Code.GDShieldObjects1);
gdjs.copyArray(gdjs.Level_321Code.GDZombieObjects1_1final, gdjs.Level_321Code.GDZombieObjects1);
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDBulletObjects1 */
/* Reuse gdjs.Level_321Code.GDZombieObjects1 */
gdjs.Level_321Code.GDDeadZombieObjects1.length = 0;

{for(var i = 0, len = gdjs.Level_321Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDeadZombieObjects1Objects, (( gdjs.Level_321Code.GDZombieObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDZombieObjects1[0].getPointX("")), (( gdjs.Level_321Code.GDZombieObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDZombieObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDZombieObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDZombieObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDeadZombieObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDeadZombieObjects1[i].resetTimer("dead");
}
}
{ //Subevents
gdjs.Level_321Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LifeLost"), gdjs.Level_321Code.GDLifeLostObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDLifeLostObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDLifeLostObjects1[i].timerElapsedTime("LL", 0.75) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDLifeLostObjects1[k] = gdjs.Level_321Code.GDLifeLostObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDLifeLostObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDLifeLostObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDLifeLostObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDLifeLostObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Shield"), gdjs.Level_321Code.GDShieldObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDShieldObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDShieldObjects1[i].timerElapsedTime("Length", 2)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDShieldObjects1[k] = gdjs.Level_321Code.GDShieldObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDShieldObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
/* Reuse gdjs.Level_321Code.GDShieldObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDShieldObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShieldObjects1[i].setScale(3.5);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDShieldObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShieldObjects1[i].putAroundObject((gdjs.Level_321Code.GDPlayerObjects1.length !== 0 ? gdjs.Level_321Code.GDPlayerObjects1[0] : null), 0, 0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDShieldObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShieldObjects1[i].setOpacity(150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Shield"), gdjs.Level_321Code.GDShieldObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDShieldObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDShieldObjects1[i].timerElapsedTime("Length", 2) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDShieldObjects1[k] = gdjs.Level_321Code.GDShieldObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDShieldObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDShieldObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDShieldObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShieldObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].rotate(-(200), runtimeScene);
}
}}

}


{


{
}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].rotate(200, runtimeScene);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].addPolarForce((gdjs.Level_321Code.GDPlayerObjects1[i].getAngle()), 150, 0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].addPolarForce((gdjs.Level_321Code.GDPlayerObjects1[i].getAngle()), -(150), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall2"), gdjs.Level_321Code.GDWall2Objects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDWall2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
/* Reuse gdjs.Level_321Code.GDWall2Objects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].separateObjectsWithForces(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDWall2Objects1Objects);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num2");
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getVariableBoolean(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(3), true) ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num3");
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getVariableBoolean(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(4), true) ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


{


{
}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_321Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("LifeHeart"), gdjs.Level_321Code.GDLifeHeartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.Level_321Code.GDShieldObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShieldObjects1Objects, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")), (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDShieldObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShieldObjects1[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDLifeHeartObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDLifeHeartObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDShieldObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShieldObjects1[i].pauseTimer("length");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDoorObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDoorObjects1[i].getBehavior("PathfindingObstacle").setImpassable(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDoorObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDoorObjects1[i].setAnimation(gdjs.Level_321Code.GDDoorObjects1[i].getAnimation() + (1));
}
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true);
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), false);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9563436);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LifeHeart"), gdjs.Level_321Code.GDLifeHeartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shield"), gdjs.Level_321Code.GDShieldObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDShieldObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShieldObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDLifeHeartObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDLifeHeartObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("Health").SetHealth(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.common.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8));
}}

}


{


{
}

}


{



}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "Start");
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9565700);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
gdjs.Level_321Code.GDPistolObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPistolObjects1Objects, 676, 114, "");
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 12, "Start");
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9566524);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
gdjs.Level_321Code.GDFlameWerferObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFlameWerferObjects1Objects, 24, 114, "");
}}

}


{


{
}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 25, "Start");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.Level_321Code.GDArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_321Code.GDDoorObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDDoorObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDoorObjects1[i].getBehavior("PathfindingObstacle").setImpassable(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDoorObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDoorObjects1[i].setAnimation(gdjs.Level_321Code.GDDoorObjects1[i].getAnimation() + (1));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDArrowObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDArrowObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("nextLevel"), gdjs.Level_321Code.GDnextLevelObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDnextLevelObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, false, runtimeScene, true);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Boss fight", false);
}}

}


{


{
}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "o");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.common.toggleVariableBoolean(runtimeScene.getVariables().get("Stats"));
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().get("Stats"), true);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9571716);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Stats"), gdjs.Level_321Code.GDStatsObjects1);
gdjs.copyArray(runtimeScene.getObjects("StatsTV"), gdjs.Level_321Code.GDStatsTVObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDStatsObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsObjects1[i].setZOrder(100);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDStatsTVObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsTVObjects1[i].setZOrder(101);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDStatsTVObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsTVObjects1[i].setString(gdjs.Level_321Code.GDStatsTVObjects1[i].getString() + ("Fuel = " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) + "    "));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDStatsTVObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsTVObjects1[i].setString(gdjs.Level_321Code.GDStatsTVObjects1[i].getString() + ("Ammo = " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) + "    "));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDStatsTVObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsTVObjects1[i].setString(gdjs.Level_321Code.GDStatsTVObjects1[i].getString() + ("Health = " + gdjs.evtTools.common.toString((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) + "     "));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDStatsTVObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsTVObjects1[i].setString(gdjs.Level_321Code.GDStatsTVObjects1[i].getString() + ("Survied = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene))) + "     "));
}
}
{ //Subevents
gdjs.Level_321Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().get("Stats"), false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Stats"), gdjs.Level_321Code.GDStatsObjects1);
gdjs.copyArray(runtimeScene.getObjects("StatsTV"), gdjs.Level_321Code.GDStatsTVObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDStatsObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsObjects1[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDStatsTVObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsTVObjects1[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDStatsTVObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsTVObjects1[i].setString(" ");
}
}}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDSurvivedObjects1.length = 0;
gdjs.Level_321Code.GDSurvivedObjects2.length = 0;
gdjs.Level_321Code.GDSurvivedObjects3.length = 0;
gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDPlayerObjects3.length = 0;
gdjs.Level_321Code.GDZombieObjects1.length = 0;
gdjs.Level_321Code.GDZombieObjects2.length = 0;
gdjs.Level_321Code.GDZombieObjects3.length = 0;
gdjs.Level_321Code.GDBulletObjects1.length = 0;
gdjs.Level_321Code.GDBulletObjects2.length = 0;
gdjs.Level_321Code.GDBulletObjects3.length = 0;
gdjs.Level_321Code.GDReloadObjects1.length = 0;
gdjs.Level_321Code.GDReloadObjects2.length = 0;
gdjs.Level_321Code.GDReloadObjects3.length = 0;
gdjs.Level_321Code.GDPistolObjects1.length = 0;
gdjs.Level_321Code.GDPistolObjects2.length = 0;
gdjs.Level_321Code.GDPistolObjects3.length = 0;
gdjs.Level_321Code.GDDeadZombieObjects1.length = 0;
gdjs.Level_321Code.GDDeadZombieObjects2.length = 0;
gdjs.Level_321Code.GDDeadZombieObjects3.length = 0;
gdjs.Level_321Code.GDShieldObjects1.length = 0;
gdjs.Level_321Code.GDShieldObjects2.length = 0;
gdjs.Level_321Code.GDShieldObjects3.length = 0;
gdjs.Level_321Code.GDFlameWerferObjects1.length = 0;
gdjs.Level_321Code.GDFlameWerferObjects2.length = 0;
gdjs.Level_321Code.GDFlameWerferObjects3.length = 0;
gdjs.Level_321Code.GDFlameObjects1.length = 0;
gdjs.Level_321Code.GDFlameObjects2.length = 0;
gdjs.Level_321Code.GDFlameObjects3.length = 0;
gdjs.Level_321Code.GDStatsObjects1.length = 0;
gdjs.Level_321Code.GDStatsObjects2.length = 0;
gdjs.Level_321Code.GDStatsObjects3.length = 0;
gdjs.Level_321Code.GDFuelObjects1.length = 0;
gdjs.Level_321Code.GDFuelObjects2.length = 0;
gdjs.Level_321Code.GDFuelObjects3.length = 0;
gdjs.Level_321Code.GDAmmoObjects1.length = 0;
gdjs.Level_321Code.GDAmmoObjects2.length = 0;
gdjs.Level_321Code.GDAmmoObjects3.length = 0;
gdjs.Level_321Code.GDFuelBarObjects1.length = 0;
gdjs.Level_321Code.GDFuelBarObjects2.length = 0;
gdjs.Level_321Code.GDFuelBarObjects3.length = 0;
gdjs.Level_321Code.GDAmmoBarObjects1.length = 0;
gdjs.Level_321Code.GDAmmoBarObjects2.length = 0;
gdjs.Level_321Code.GDAmmoBarObjects3.length = 0;
gdjs.Level_321Code.GDCaseObjects1.length = 0;
gdjs.Level_321Code.GDCaseObjects2.length = 0;
gdjs.Level_321Code.GDCaseObjects3.length = 0;
gdjs.Level_321Code.GDLifeHeartObjects1.length = 0;
gdjs.Level_321Code.GDLifeHeartObjects2.length = 0;
gdjs.Level_321Code.GDLifeHeartObjects3.length = 0;
gdjs.Level_321Code.GDWall2Objects1.length = 0;
gdjs.Level_321Code.GDWall2Objects2.length = 0;
gdjs.Level_321Code.GDWall2Objects3.length = 0;
gdjs.Level_321Code.GDSpawnZoneObjects1.length = 0;
gdjs.Level_321Code.GDSpawnZoneObjects2.length = 0;
gdjs.Level_321Code.GDSpawnZoneObjects3.length = 0;
gdjs.Level_321Code.GDLifeLostObjects1.length = 0;
gdjs.Level_321Code.GDLifeLostObjects2.length = 0;
gdjs.Level_321Code.GDLifeLostObjects3.length = 0;
gdjs.Level_321Code.GDStatsTVObjects1.length = 0;
gdjs.Level_321Code.GDStatsTVObjects2.length = 0;
gdjs.Level_321Code.GDStatsTVObjects3.length = 0;
gdjs.Level_321Code.GDFloorObjects1.length = 0;
gdjs.Level_321Code.GDFloorObjects2.length = 0;
gdjs.Level_321Code.GDFloorObjects3.length = 0;
gdjs.Level_321Code.GDDoorObjects1.length = 0;
gdjs.Level_321Code.GDDoorObjects2.length = 0;
gdjs.Level_321Code.GDDoorObjects3.length = 0;
gdjs.Level_321Code.GDnextLevelObjects1.length = 0;
gdjs.Level_321Code.GDnextLevelObjects2.length = 0;
gdjs.Level_321Code.GDnextLevelObjects3.length = 0;
gdjs.Level_321Code.GDNewObjectObjects1.length = 0;
gdjs.Level_321Code.GDNewObjectObjects2.length = 0;
gdjs.Level_321Code.GDNewObjectObjects3.length = 0;
gdjs.Level_321Code.GDNewObject2Objects1.length = 0;
gdjs.Level_321Code.GDNewObject2Objects2.length = 0;
gdjs.Level_321Code.GDNewObject2Objects3.length = 0;
gdjs.Level_321Code.GDArrowObjects1.length = 0;
gdjs.Level_321Code.GDArrowObjects2.length = 0;
gdjs.Level_321Code.GDArrowObjects3.length = 0;

gdjs.Level_321Code.eventsList6(runtimeScene);
return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
