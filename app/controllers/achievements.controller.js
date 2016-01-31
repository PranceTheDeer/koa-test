'use strict';
/**
 * Created by Prance on 1/25/2016.
 */
var rp = require('request-promise');
var _ = require('underscore');
var DailyAchievements = {};

DailyAchievements.achievements = [];

DailyAchievements.getAllAchievements = getAllAchievements;
DailyAchievements.getAchievementInfo = getAchievementInfo;

/**
 *
 */
function getAllAchievements() {
    var options = {
        'uri': 'https://api.guildwars2.com/v2/achievements/daily',
        json: true
    };
    rp(options)
        .then(function (res) {
            getAchievementInfo(res.pve);
        }).catch(function (err) {
        console.log('Error reached');
        console.log(err);
    });

}

/**
 *
 */
function getAchievementInfo(achievementArray) {
    let idArray = _.pluck(achievementArray, 'id');

    var url = 'https://api.guildwars2.com/v2/achievements?ids=' +
        _.each(idArray, function(id) {
           return id + ',';
        });

    var options = {
        uri: url,
        json: true,
        form: {
            ids: idArray
        }
    };

    rp(options)
        .then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
    });
}

module.exports = DailyAchievements;