
from abc import abstractclassmethod, abstractmethod


class EChart(object):
    def __init__(self, global_args=None, options=None):
        if global_args == None:
            self.global_args = {
                "id": "chart",
                "init": {
                    "dom": "document.getElementById('chart')",
                    "theme": None,
                    'options': {
                        "width": 800,
                        "height": 600
                    }

                }
            }
        else:
            self.global_args = global_args
    def get_global_args(self):
        return self.global_args

    def set_global_args(self):
        pass

    def output(type):
        pass
