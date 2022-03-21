from EChart import EChart


class LineChart(EChart):

    def __init__(self, global_args, options):
       super(LineChart, self).__init__(global_args)
       self.options = options

    def get_options(self):
        return self.options

    def set_options(self, attrs, values):
       for attr, value in attrs, values:
           attr = attr.split(".")
    
    def output(self,type):
        if type == "html":
            pass
