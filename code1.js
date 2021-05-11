gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDSurvivedObjects1= [];
gdjs.Game_32OverCode.GDSurvivedObjects2= [];
gdjs.Game_32OverCode.GDPlayerObjects1= [];
gdjs.Game_32OverCode.GDPlayerObjects2= [];
gdjs.Game_32OverCode.GDZombieObjects1= [];
gdjs.Game_32OverCode.GDZombieObjects2= [];
gdjs.Game_32OverCode.GDBulletObjects1= [];
gdjs.Game_32OverCode.GDBulletObjects2= [];
gdjs.Game_32OverCode.GDReloadObjects1= [];
gdjs.Game_32OverCode.GDReloadObjects2= [];
gdjs.Game_32OverCode.GDPistolObjects1= [];
gdjs.Game_32OverCode.GDPistolObjects2= [];
gdjs.Game_32OverCode.GDDeadZombieObjects1= [];
gdjs.Game_32OverCode.GDDeadZombieObjects2= [];
gdjs.Game_32OverCode.GDShieldObjects1= [];
gdjs.Game_32OverCode.GDShieldObjects2= [];
gdjs.Game_32OverCode.GDFlameWerferObjects1= [];
gdjs.Game_32OverCode.GDFlameWerferObjects2= [];
gdjs.Game_32OverCode.GDFlameObjects1= [];
gdjs.Game_32OverCode.GDFlameObjects2= [];
gdjs.Game_32OverCode.GDStatsObjects1= [];
gdjs.Game_32OverCode.GDStatsObjects2= [];
gdjs.Game_32OverCode.GDFuelObjects1= [];
gdjs.Game_32OverCode.GDFuelObjects2= [];
gdjs.Game_32OverCode.GDAmmoObjects1= [];
gdjs.Game_32OverCode.GDAmmoObjects2= [];
gdjs.Game_32OverCode.GDFuelBarObjects1= [];
gdjs.Game_32OverCode.GDFuelBarObjects2= [];
gdjs.Game_32OverCode.GDAmmoBarObjects1= [];
gdjs.Game_32OverCode.GDAmmoBarObjects2= [];
gdjs.Game_32OverCode.GDCaseObjects1= [];
gdjs.Game_32OverCode.GDCaseObjects2= [];
gdjs.Game_32OverCode.GDLifeHeartObjects1= [];
gdjs.Game_32OverCode.GDLifeHeartObjects2= [];
gdjs.Game_32OverCode.GDWall2Objects1= [];
gdjs.Game_32OverCode.GDWall2Objects2= [];
gdjs.Game_32OverCode.GDSpawnZoneObjects1= [];
gdjs.Game_32OverCode.GDSpawnZoneObjects2= [];
gdjs.Game_32OverCode.GDLifeLostObjects1= [];
gdjs.Game_32OverCode.GDLifeLostObjects2= [];
gdjs.Game_32OverCode.GDStatsTVObjects1= [];
gdjs.Game_32OverCode.GDStatsTVObjects2= [];
gdjs.Game_32OverCode.GDGameOverObjects1= [];
gdjs.Game_32OverCode.GDGameOverObjects2= [];
gdjs.Game_32OverCode.GDTextObjects1= [];
gdjs.Game_32OverCode.GDTextObjects2= [];
gdjs.Game_32OverCode.GDBlockerObjects1= [];
gdjs.Game_32OverCode.GDBlockerObjects2= [];
gdjs.Game_32OverCode.GDreturnObjects1= [];
gdjs.Game_32OverCode.GDreturnObjects2= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_0 = {val:false};
gdjs.Game_32OverCode.conditionTrue_1 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_1 = {val:false};


gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDreturnObjects1Objects = Hashtable.newFrom({"return": gdjs.Game_32OverCode.GDreturnObjects1});gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Survived"), gdjs.Game_32OverCode.GDSurvivedObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDSurvivedObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDSurvivedObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Survived")) * 10) / 10));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("return"), gdjs.Game_32OverCode.GDreturnObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition0IsTrue_0;
gdjs.Game_32OverCode.condition0IsTrue_1.val = false;
gdjs.Game_32OverCode.condition1IsTrue_1.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDreturnObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Game_32OverCode.condition0IsTrue_1.val ) {
{
gdjs.Game_32OverCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.Game_32OverCode.conditionTrue_1.val = true && gdjs.Game_32OverCode.condition0IsTrue_1.val && gdjs.Game_32OverCode.condition1IsTrue_1.val;
}
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDSurvivedObjects1.length = 0;
gdjs.Game_32OverCode.GDSurvivedObjects2.length = 0;
gdjs.Game_32OverCode.GDPlayerObjects1.length = 0;
gdjs.Game_32OverCode.GDPlayerObjects2.length = 0;
gdjs.Game_32OverCode.GDZombieObjects1.length = 0;
gdjs.Game_32OverCode.GDZombieObjects2.length = 0;
gdjs.Game_32OverCode.GDBulletObjects1.length = 0;
gdjs.Game_32OverCode.GDBulletObjects2.length = 0;
gdjs.Game_32OverCode.GDReloadObjects1.length = 0;
gdjs.Game_32OverCode.GDReloadObjects2.length = 0;
gdjs.Game_32OverCode.GDPistolObjects1.length = 0;
gdjs.Game_32OverCode.GDPistolObjects2.length = 0;
gdjs.Game_32OverCode.GDDeadZombieObjects1.length = 0;
gdjs.Game_32OverCode.GDDeadZombieObjects2.length = 0;
gdjs.Game_32OverCode.GDShieldObjects1.length = 0;
gdjs.Game_32OverCode.GDShieldObjects2.length = 0;
gdjs.Game_32OverCode.GDFlameWerferObjects1.length = 0;
gdjs.Game_32OverCode.GDFlameWerferObjects2.length = 0;
gdjs.Game_32OverCode.GDFlameObjects1.length = 0;
gdjs.Game_32OverCode.GDFlameObjects2.length = 0;
gdjs.Game_32OverCode.GDStatsObjects1.length = 0;
gdjs.Game_32OverCode.GDStatsObjects2.length = 0;
gdjs.Game_32OverCode.GDFuelObjects1.length = 0;
gdjs.Game_32OverCode.GDFuelObjects2.length = 0;
gdjs.Game_32OverCode.GDAmmoObjects1.length = 0;
gdjs.Game_32OverCode.GDAmmoObjects2.length = 0;
gdjs.Game_32OverCode.GDFuelBarObjects1.length = 0;
gdjs.Game_32OverCode.GDFuelBarObjects2.length = 0;
gdjs.Game_32OverCode.GDAmmoBarObjects1.length = 0;
gdjs.Game_32OverCode.GDAmmoBarObjects2.length = 0;
gdjs.Game_32OverCode.GDCaseObjects1.length = 0;
gdjs.Game_32OverCode.GDCaseObjects2.length = 0;
gdjs.Game_32OverCode.GDLifeHeartObjects1.length = 0;
gdjs.Game_32OverCode.GDLifeHeartObjects2.length = 0;
gdjs.Game_32OverCode.GDWall2Objects1.length = 0;
gdjs.Game_32OverCode.GDWall2Objects2.length = 0;
gdjs.Game_32OverCode.GDSpawnZoneObjects1.length = 0;
gdjs.Game_32OverCode.GDSpawnZoneObjects2.length = 0;
gdjs.Game_32OverCode.GDLifeLostObjects1.length = 0;
gdjs.Game_32OverCode.GDLifeLostObjects2.length = 0;
gdjs.Game_32OverCode.GDStatsTVObjects1.length = 0;
gdjs.Game_32OverCode.GDStatsTVObjects2.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects2.length = 0;
gdjs.Game_32OverCode.GDTextObjects1.length = 0;
gdjs.Game_32OverCode.GDTextObjects2.length = 0;
gdjs.Game_32OverCode.GDBlockerObjects1.length = 0;
gdjs.Game_32OverCode.GDBlockerObjects2.length = 0;
gdjs.Game_32OverCode.GDreturnObjects1.length = 0;
gdjs.Game_32OverCode.GDreturnObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
