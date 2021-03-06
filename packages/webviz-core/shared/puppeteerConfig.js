// @flow
//
//  Copyright (c) 2020-present, Cruise LLC
//
//  This source code is licensed under the Apache License, Version 2.0,
//  found in the LICENSE file in the root directory of this source tree.
//  You may not use this file except in compliance with the License.

if (process.env.WEBVIZ_IN_DOCKER) {
  module.exports = {
    launch: {
      executablePath: "/usr/bin/google-chrome",
      headless: false,
      args: [
        "--use-gl=swiftshader",
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--headless",
        "--mute-audio",
        "--user-agent=PuppeteerTestingChrome/79.",
        "--disable-gpu", // In CI we don't have GPUs anyway, and on desktops this makes it more stable.
      ],
    },
  };
} else {
  module.exports = { launch: { headless: false } };
}
