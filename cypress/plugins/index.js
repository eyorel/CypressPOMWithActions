const fs = require('fs-extra');
const path = require('path');
const { merge } = require('mochawesome-merge');
const marge = require('mochawesome-report-generator');

module.exports = (on, config) => {
  on('after:run', async (results) => {
    const jsonDir = config.reporterOptions.reportDir;
    const jsonFiles = path.join(jsonDir, '*.json');
    const reportPath = path.join(jsonDir, 'merged-report.json');
    const htmlReportPath = path.join(jsonDir, 'merged-report.html');

    const mergedJson = await merge({ files: jsonFiles });
    await fs.writeJson(reportPath, mergedJson);
    await marge.create(mergedJson, {
      reportDir: jsonDir,
      saveJson: true,
      overwrite: true,
      reportFilename: 'merged-report.html'
    });

    console.log('Report generated: ', htmlReportPath);
  });

  return config;
};
