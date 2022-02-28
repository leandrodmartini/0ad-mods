var waterLevelDecreaseHeight = 10;
var waterDecreaseTimeInMiliseconds = 1  * 60 * 1000;
var waterWarningTexts = [
	"Rainning has stopped.",
	"This land is drying. Water is going to the Nile.",
	"Too hot and dry. Water is going to a lower level.",
	"Better send ships to the lower terrain.",
        "It's ten meters lower each time.",
];
var textId = 0;

Trigger.prototype.DecreasingWaterNotification = function()
{
  Engine.QueryInterface(SYSTEM_ENTITY, IID_GuiInterface).AddTimeNotification({
    "message": waterWarningTexts[this.textId],
    "translateMessage": true
  }, waterDecreaseTimeInMiliseconds);
  this.textId = this.textId + 1;
  if (textId > 4) {
    this.DoAfterDelay(waterDecreaseTimeInMiliseconds, "DecreasingWaterNotification", {});
  }
};

Trigger.prototype.DecreaseWaterLevelStep = function()
{
  let cmpWaterManager = Engine.QueryInterface(SYSTEM_ENTITY, IID_WaterManager);
  let newLevel = cmpWaterManager.GetWaterLevel() - waterLevelDecreaseHeight;

  if (newLevel > 10) {
    cmpWaterManager.SetWaterLevel(newLevel);
    this.DoAfterDelay(waterDecreaseTimeInMiliseconds, "DecreaseWaterLevelStep", {});
  }
};

let cmpTrigger = Engine.QueryInterface(SYSTEM_ENTITY, IID_Trigger);
cmpTrigger.DoAfterDelay(1 * 60 * 1000, "DecreasingWaterNotification", {});
cmpTrigger.DoAfterDelay(1 * 60 * 1000, "DecreaseWaterLevelStep", {});




